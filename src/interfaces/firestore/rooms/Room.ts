import { MyUser } from "../users/User";

export interface Room {
    id: string
    members: MyUser[],
    messages: Message[]
}

export interface Message {
    owner: string;
    text: string;
}