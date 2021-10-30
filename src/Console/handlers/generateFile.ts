import * as _path from 'path';
import Commander from "../handlers/Commander";
import * as fs from "fs";
import Logger from "../utility/logger";
import {Types} from "../interfaces";

class GenerateFile extends Commander {

    private logger;

    /**
     * find all imports
     */
    private importRegex : string = "^import.+;$"

    /**
     * find all exports
     */
    private exportRegex : string = "(?<=export {)(.*)(?=})"

    constructor() {
        super();
        this.logger = new Logger()
    }

    public fileExists(file_path : string) {
        return fs.existsSync(file_path)
    }

    public makeFile(file_name: string, path: string, data : string, type: Types, callback ? : ()=> void): void {
        const filePath = _path.join(process.env.PWD!, path!)
        const file = `${filePath}/${file_name}${type}.ts`;

        if(!this.fileExists(file)) {
            fs.writeFile(file, data, (err) => {
                if (err) throw err;
                this.logger.success(`${type} Created`)
                callback && callback()
            })
            return
        }
        this.logger.error(`${type}  Exists`)
    }

    public readFile(file_path: string): string {
        return  fs.readFileSync(file_path, 'utf-8')
    }

    public writeFile(file_path: string, data : string): void {
        fs.writeFileSync(file_path , data);
    }

    public appendIntoImports(data: string, toAdd : string): string[] {
        const findImports = new RegExp(this.importRegex , 'gim')
        const lines : string[] = Array.from(data.matchAll(findImports), m => `${m[0]}`) || []
        lines.push(toAdd)
        return lines
    }

    public appendIntoExport(data: string, toAdd : string): string[] {
        const findImports = new RegExp(this.exportRegex , 'gim')
        const lines : string[] = data.match(findImports) || []
        lines.push(toAdd)
        return lines
    }
}

export default GenerateFile