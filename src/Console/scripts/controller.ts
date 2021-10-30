import controllerDTO from "../dto/Controller";
import GenerateFile from "../handlers/generateFile";
import {IOption} from "../handlers/Commander";
import {Entity} from "./entity";
import {Repository} from "./repository";

export class Controller extends GenerateFile {

    private controller_path = "./src/HTTP/controllers"
    private controller_name: string = "";
    private entity;
    private repository;

    constructor() {
        super();
        this.entity = new Entity
        this.repository = new Repository
    }

    public make(name?: string) {
        const options: IOption[] = [
            {flags: '-n, --name <name>', description: 'controller name'},
        ]
        const args = this.programs(options).parse(process.argv)
        this.controller_name = name || args.opts().name
        this.makeFile(this.controller_name, this.controller_path, controllerDTO(this.controller_name), "Controller", this.handleDtoRepoEntity.bind(this))
    }

    public handleDtoRepoEntity() {
        this.repository.make(this.controller_name)
        this.entity.make(this.controller_name)
    }
}