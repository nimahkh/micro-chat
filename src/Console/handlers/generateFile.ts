import * as _path from 'path';
import Commander from "../handlers/Commander";
import * as fs from "fs";
import Logger from "../utility/logger";
import {Types} from "../interfaces";

class GenerateFile extends Commander {

    private logger;

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
}

export default GenerateFile