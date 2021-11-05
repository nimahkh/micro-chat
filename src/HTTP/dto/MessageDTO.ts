import MessageModel from "../entities/MessageEntity";
import {model, Schema} from "mongoose"

class MessageSchema {
    static get schema() {
        return new Schema({
                message: {
                    type: String,
                    required: true
                },
                from: {
                    type: Schema.Types.ObjectId,
                    ref: 'User',
                    required: true
                },
                to: {
                    type: Schema.Types.ObjectId,
                    ref: 'User',
                    required: true
                }
            },
            {
                timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}
            });
    }
}

const schema = model<MessageModel>("Message", MessageSchema.schema);

export default schema