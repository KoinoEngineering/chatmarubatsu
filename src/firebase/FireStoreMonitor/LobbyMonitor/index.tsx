import { firestore, StorePath } from "firebase/firebase.config";
import { Room } from "interfaces/firestore/rooms/Room";
import topActionCreators from "pages/Lobby/LobbyActions";
import React, { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

const LobbyMonitor = () => {
    const dispatch = useDispatch();
    const actions = useMemo(() => {
        return bindActionCreators(topActionCreators, dispatch);
    }, [dispatch]);

    useEffect(() => {
        return firestore
            .collection(StorePath.ROOMS)
            .onSnapshot(docSnapshot => {
                docSnapshot.docChanges().forEach(doc => {
                    switch (doc.type) {
                        case "added":
                            actions.roomAdded({ room: { id: doc.doc.id, ...doc.doc.data() as Omit<Room, "id"> } });
                            break;
                        case "modified":
                            actions.roomModified({ room: { id: doc.doc.id, ...doc.doc.data() as Omit<Room, "id"> } });
                            break;
                        case "removed":
                            actions.roomRemoved({ room: { id: doc.doc.id, ...doc.doc.data() as Omit<Room, "id"> } });
                            break;
                    }
                });
            });
    }, [actions]);
    return <>
    </>;
};


export default LobbyMonitor;