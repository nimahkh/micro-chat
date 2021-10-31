import dtoDTO from "../dto/Dto";
import GenerateFile from "../handlers/generateFile";
import BaseScript from "./BaseScript"
import {baseOptions} from "../utility/options";

export class Dto extends GenerateFile implements BaseScript {

    private dto_path = "./src/HTTP/dto"

    public make(name? :string){
        const args = this.programs(baseOptions).parse(process.argv)
        const dto_name = name || args.opts().name
        this.makeFile(dto_name, this.dto_path, dtoDTO(dto_name), "DTO")
    }
}