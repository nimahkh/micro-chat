import {Document} from "mongoose"

interface IUser extends Document {
    name: string;
    avatar: number;
}

export default IUser