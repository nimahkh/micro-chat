import BaseRepository from "./BaseRepository";
import UserModel from "@entities/User";
import UserSchema from "@dto/User"
import {Document, Model, Types} from "mongoose";
import User from "@dto/User";
import UserValidation from "@controllers/Validation/UserValidation";
import IResponse from "@controllers/interfaces/response";

class UserRepository extends BaseRepository<UserModel> {
    private static _model: Model<Document>;

    constructor() {
        super(UserSchema);
    }

    static findOne(filter: { username: string }, callback: (err: any, user: any) => (void)) {
        this._model.findOne(filter, callback);
    }

    async count(filter: { [key: string]: string }): Promise<number> {
        return this._model.where(filter).countDocuments();
    }

    /**
     * @param user <UserModel>
     * @param res <IResponse<UserModel>>
     */
    createUser(user: UserModel, res: IResponse<UserModel>): void {
        const userRequest = new User({
            _id: new Types.ObjectId(),
            name: user.name,
            email: user.email,
            avatar: user.avatar,
            password: user.password
        });
        // Validate user
        const validation = new UserValidation(this, {email: userRequest.email}).validate();
        validation.then((validate: boolean) => {
            // if validate is true
            if (validate) {
                this.create(userRequest, (error, result) => {
                    if (error) res.send({"error": error});
                    else res.send({"success": result});
                });
            } else {
                // if validate is false
                res.send({"error": "Email Exists"});
            }
        }).catch(err => {
            // if validate is false
            res.send({"error": err});
        });
    }
}


Object.seal(UserRepository);
export default UserRepository;