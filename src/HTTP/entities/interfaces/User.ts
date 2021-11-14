import {Document, Types} from "mongoose"

interface IUser extends Document {
    _id: Types.ObjectId;
    name: string;
    avatar: string;
    password: string;
    email: string;
}

export default IUser