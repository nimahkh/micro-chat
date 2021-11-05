import BaseRepository from "./BaseRepository";
import MessageEntity from "@entities/MessageEntity";
import MessageSchema from "@dto/MessageDTO"
import {Document} from "mongoose"

class MessageRepository extends BaseRepository<MessageEntity> {
    constructor() {
        super(MessageSchema);
    }

    retrieve(callback: (error: any, result: Document[]) => void) {
        super.retrieve;
        this._model.find({}).populate('from').populate('to').exec(callback)
    }

}

Object.seal(MessageRepository);
export default MessageRepository;