import entityDTO from "../dto/Entity";
import interfaceDTO from "../dto/Interface";
import GenerateFile from "../handlers/generateFile";
import {IOption} from "../handlers/Commander";

export class Entity extends GenerateFile {

    private entity_path = "./src/HTTP/entities"
    private interface_path = this.entity_path+"/interfaces"

    public make(name? :string){
        const options : IOption[] = [
            {flags : '-n, --name <name>', description: 'entity name'},
        ]

        const args = this.programs(options).parse(process.argv)
        const entity_name = name || args.opts().name
        this.makeFile(entity_name, this.entity_path, entityDTO(entity_name), "Entity")
        this.makeFile(entity_name, this.interface_path, interfaceDTO(entity_name), "Interface")
    }
}
//
// const init = new Entity();
// init.make()