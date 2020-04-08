import { Action } from "redux";

export interface ActionObject<T extends string, P = undefined> extends Action<T> {
    payload?: P
}