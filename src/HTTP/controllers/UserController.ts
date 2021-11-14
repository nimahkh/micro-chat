import IController from "./interfaces/Controller";
import {UserRepository} from "../repositories/index";
import UserModel from "../entities/User";
import IRequest from "./interfaces/request";
import IResponse from "./interfaces/response";

class UserController implements IController {

    repository : UserRepository;
    constructor(userRepository : UserRepository) {
        this.repository = userRepository;
    }

    create = (req: IRequest<UserModel>, res: IResponse<UserModel>): void => {
        try {
            const userModel: UserModel = req.body;
            this.repository.createUser(userModel, res)
        } catch (e) {
            res.send({"error": "error in your request"+ e});
        }
    }
}

export default UserController;