const controllerDTO = (controller_name: string) : string =>
    `import IController from "./interfaces/Controller";
import {${controller_name}Repository} from "../repositories/index";
import ${controller_name}Entity from "../entities/${controller_name}Entity";
import IRequest from "./interfaces/request";
import IResponse from "./interfaces/response";

class ${controller_name}Controller implements IController {

    create(req: IRequest<${controller_name}Entity>, res: IResponse<${controller_name}Entity>): void {
        try {
            const ${controller_name.toLowerCase()}Entity: ${controller_name}Entity = req.body;
            const ${controller_name.toLowerCase()} = new ${controller_name}Repository();
            ${controller_name.toLowerCase()}.create(${controller_name.toLowerCase()}Entity, (error, result) => {
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

export default ${controller_name}Controller;`

export default controllerDTO;