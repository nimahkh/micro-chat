import {IUser} from "./interfaces";
import {Document} from "mongoose"

class UserModel extends Document {
    private _user: IUser;

    constructor(user: IUser) {
        super()
        this._user = user;
    }

    get email (): string {
        return this._user.email;
    }

    get name (): string {
        return this._user.name;
    }

    get avatar (): string {
        return this._user.avatar;
    }

    get password (): string {
        return this._user.password;
    }
}

Object.seal(UserModel);

export default UserModel;