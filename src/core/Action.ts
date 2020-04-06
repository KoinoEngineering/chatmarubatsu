import { ActionObject } from "interfaces/Action";

export const createAction = <T extends string, P>(type: T, payload: P): ActionObject<T, P> => {
    return {
        type,
        payload
    };
};