import {IUser} from "./interfaces";
import {Document} from "mongoose"

class UserModel extends Document {
    private _user: IUser;

    constructor(user: IUser) {
        super()
        this._user = user;
    }

    get name (): string {
        return this._user.name;
    }
    get avatar (): number {
        return this._user.avatar;
    }
}

Object.seal(UserModel);

export default UserModel;