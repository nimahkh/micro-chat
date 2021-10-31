import GenerateFile from "../handlers/generateFile";
import repositoryDTO from "../dto/Repository";
import BaseScript from "./BaseScript";
import {baseOptions} from "../utility/options";

export class Repository extends GenerateFile implements BaseScript {

    private repo_path: string = "./src/HTTP/repositories"
    private repo_name: string = ""

    public make(name? :string){
        const args = this.programs(baseOptions).parse(process.argv)
        this.repo_name = name || args.opts().name
        this.makeFile(this.repo_name, this.repo_path, repositoryDTO(this.repo_name), "Repository", this.appendRepositoryToIndex.bind(this))
    }

    protected appendRepositoryToIndex(){
        const path = `${this.repo_path}/index.ts`
        const readFile = this.readFile(path)
        const importLineToAdd = `import ${this.repo_name}Repository from './${this.repo_name}Repository';`
        const exportToAdd = `${this.repo_name}Repository`
        const imports : string[] = this.appendIntoImports(readFile, importLineToAdd)
        const exports : string[] = this.appendIntoExport(readFile, exportToAdd)
        const combineImports = imports.join("\n")
        const combineExports = `export {${exports.join(",")} }`
        const combineAll = `${combineImports}\n\n${combineExports}`

        this.writeFile(path, combineAll)
    }
}