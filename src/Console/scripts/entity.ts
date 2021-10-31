import entityDTO from "../dto/Entity";
import interfaceDTO from "../dto/Interface";
import GenerateFile from "../handlers/generateFile";
import BaseScript from "./BaseScript"
import {baseOptions} from "../utility/options";

export class Entity extends GenerateFile implements BaseScript {

    private entity_path = "./src/HTTP/entities"
    private interface_path = this.entity_path+"/interfaces"

    public make(name? :string){
        const args = this.programs(baseOptions).parse(process.argv)
        const entity_name = name || args.opts().name
        this.makeFile(entity_name, this.entity_path, entityDTO(entity_name), "Entity")
        this.makeFile(entity_name, this.interface_path, interfaceDTO(entity_name), "Interface")
    }
}