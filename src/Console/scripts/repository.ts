import GenerateFile from "../handlers/generateFile";
import {IOption} from "../handlers/Commander";
import repositoryDTO from "../dto/Repository";

export class Repository extends GenerateFile {

    private repo_path = "./src/HTTP/repositories"

    public make(name? :string){
        const options : IOption[] = [
            {flags : '-n, --name <name>', description: 'repository name'},
        ]
        const args = this.programs(options).parse(process.argv)
        const repo_name = name || args.opts().name
        this.makeFile(repo_name, this.repo_path, repositoryDTO(repo_name), "Repository")
    }
}