import controllerDTO from "../dto/Controller";
import GenerateFile from "../handlers/generateFile";
import {Entity} from "./entity";
import {Dto} from "./dto";
import {Repository} from "./repository";
import BaseScript from "./BaseScript";
import {baseOptions} from "../utility/options";

export class Controller extends GenerateFile implements BaseScript {

    private controller_path = "./src/HTTP/controllers"
    private controller_name: string = "";
    private entity;
    private repository;
    private dto;

    constructor() {
        super();
        this.entity = new Entity
        this.repository = new Repository
        this.dto = new Dto;
    }

    public make(name?: string) {
        const args = this.programs(baseOptions).parse(process.argv)
        this.controller_name = name || args.opts().name
        this.makeFile(this.controller_name, this.controller_path, controllerDTO(this.controller_name), "Controller", this.handleDtoRepoEntity.bind(this))
    }

    public handleDtoRepoEntity() {
        this.repository.make(this.controller_name)
        this.entity.make(this.controller_name)
        this.dto.make(this.controller_name)
    }
}