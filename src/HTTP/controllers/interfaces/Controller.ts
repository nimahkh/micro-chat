import IReadController from "./Read";
import IWriteController from "./Write";

interface IController extends IReadController, IWriteController{


}

export default IController;