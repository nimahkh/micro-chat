import {Document} from "mongoose"
import IUser from "@entities/interfaces/User";

interface IMessage extends Document {
    message: string;
    user: IUser
}

export default IMessage