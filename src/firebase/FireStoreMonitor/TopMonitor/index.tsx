import { firestore } from "firebase/firebase.config";
import { MyUser } from "interfaces/firestore/users/User";
import topActionCreators from "pages/Top/TopActions";
import React, { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

const TopMonitor = () => {
    const dispatch = useDispatch();
    const actions = useMemo(() => {
        return bindActionCreators(topActionCreators, dispatch);
    }, [dispatch]);

    useEffect(() => {
        return firestore
            .collection("users")
            .onSnapshot(docSnapshot => {
                const docs: MyUser[] = [];
                const changed: (MyUser & { type: string })[] = [];
                docSnapshot.forEach(d => {
                    docs.push({ id: d.id, ...d.data() });
                });
                docSnapshot.docChanges().forEach(({ doc, type }) => {
                    changed.push({ type, id: doc.id, ...doc.data() });
                });
                if (process.env.NODE_ENV !== "production") {
                    console.groupCollapsed("users onSnapshot");
                    console.log("all", docs);
                    console.log("changed only", changed);
                    console.groupEnd();
                }
                actions.setUsers(docs);
            }, err => {
                throw err;
            });
    }, [actions]);
    return <>
    </>;
};


export default TopMonitor;