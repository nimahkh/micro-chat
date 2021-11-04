import express = require("express");
import MessageController from "@controllers/MessageController";

const router = express.Router();
class MessageRoutes {
    private readonly _messageController: MessageController;

    constructor () {
        this._messageController = new MessageController();
    }
    get create () : express.Router {
        const controller = this._messageController;
        router.post("/", controller.create);
        router.get("/", controller.showAll);
        return router;
    }
}

Object.seal(MessageRoutes);
export default MessageRoutes;