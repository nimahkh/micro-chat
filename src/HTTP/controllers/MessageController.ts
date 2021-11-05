import IController from "./interfaces/Controller";
import {MessageRepository} from "../repositories/index";
import MessageEntity from "../entities/MessageEntity";
import IRequest from "./interfaces/request";
import IResponse from "./interfaces/response";

class MessageController implements IController {

    create(req: IRequest<MessageEntity>, res: IResponse<MessageEntity>): void {
        try {
            const messageEntity: MessageEntity = req.body;
            const message = new MessageRepository();
            message.create(messageEntity, (error, result) => {
                if(error) res.send({"error": error});
                else res.send({"success": result});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});
        }
    };

    showAll(req: IRequest<MessageEntity>, res: IResponse<MessageEntity>): void {
        try {
            const message = new MessageRepository();
            message.retrieve((error, result) => {
                if(error) res.send({"error": error});
                else res.send({"success": result});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});
        }
    };

}

export default MessageController;