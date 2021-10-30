import express = require("express");
import UserController from "../controllers/UserController";

const router = express.Router();
class UserRoutes {
    private readonly _userController: UserController;

    constructor () {
        this._userController = new UserController();
    }
    get routes () : express.Router {

        const controller = this._userController;
        router.post("/user", controller.create);
        return router;
    }
}

Object.seal(UserRoutes);
export default UserRoutes;