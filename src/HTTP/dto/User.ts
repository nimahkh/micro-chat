import UserModel from "../entities/User";
import {model, Schema, Types} from "mongoose"

class UserSchema {
    static get schema() {
        return new Schema({
                _id: {
                    type: Types.ObjectId,
                    required: true
                },
                name: {
                    type: String,
                    required: true
                },
                avatar: {
                    type: String,
                    required: true
                },
            },
            {
                timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}
            });
    }
}

const schema = model<UserModel>("User", UserSchema.schema);

export default schema