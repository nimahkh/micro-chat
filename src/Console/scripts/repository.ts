import GenerateFile from "../handlers/generateFile";
import {IOption} from "../handlers/Commander";
import repositoryDTO from "../dto/Repository";

export class Repository extends GenerateFile {

    private repo_path: string = "./src/HTTP/repositories"
    private repo_name: string = ""

    public make(name? :string){
        const options : IOption[] = [
            {flags : '-n, --name <name>', description: 'repository name'},
        ]
        const args = this.programs(options).parse(process.argv)
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