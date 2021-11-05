import {IMessage, IUser} from "./interfaces";
import {Document} from "mongoose"

class MessageEntity extends Document {
    private _message: IMessage;

    constructor(message: IMessage) {
        super()
        this._message = message;
    }

    get message (): string {
        return this._message.message;
    }

    get from (): IUser {
        return this._message.user;
    }

    get to (): IUser {
        return this._message.user;
    }

}

Object.seal(MessageEntity);

export default MessageEntity;