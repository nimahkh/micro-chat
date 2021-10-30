import IController from "./interfaces/Controller";
import {UserRepository} from "../repositories/index";
import UserModel from "../entities/User";
import IRequest from "./interfaces/request";
import IResponse from "./interfaces/response";

class UserController implements IController {

    create(req: IRequest<UserModel>, res: IResponse<UserModel>): void {
        try {
            const userModel: UserModel = req.body;
            const user = new UserRepository();
            user.create(userModel, (error, result) => {
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

export default UserController;