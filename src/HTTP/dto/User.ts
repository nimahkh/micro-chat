import UserModel from "../entities/User";
import {model, Schema, Types} from "mongoose"
import bcrypt from "bcrypt-nodejs";
import {IUser} from "@entities/interfaces";

class UserSchema {
    private static schemaObject: Schema = new Schema({
        _id: {
            type: Types.ObjectId,
            required: true
        },
        email: {
            type: String,
            required: true,
            match: /.+\@.+\..+/,
            index: { unique: true }
        },
        name: {
            type: String,
            required: true,
        },
        avatar: {
            type: String,
            required: true
        },
        password: {
            type: String,
            select: false
        },
    }, {
        autoIndex: true,
        timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}
    });

    static preSave() {
        this.schemaObject.pre<IUser>('save', function (next) {
                const user = this;
                bcrypt.genSalt(10, (err, salt) => {
                    if (err) {
                        return next(err);
                    }
                    bcrypt.hash(this.password, salt, null, (err: Error, hash) => {
                        if (err) {
                            return next(err);
                        }
                        user.password = hash;
                        next();
                    });
                });
            });
        return this;
    }

    static comparePassword() {
        this.schemaObject.methods.comparePassword = function (candidatePassword: string, callback: any) {
            bcrypt.compare(candidatePassword, this.password, (err: Error, isMatch: boolean) => {
                callback(err, isMatch);
            });
        };
        return this.schemaObject;
    }

    static get userSchema() {
        let schema = this.preSave().comparePassword();
        return model<UserModel>('User', schema);
    }
}

const schema = UserSchema.userSchema;

export default schema