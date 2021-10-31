const repositoryDTO = (repo_name: string) : string =>
    `import BaseRepository from "./BaseRepository";
import ${repo_name}Entity from "@entities/${repo_name}Entity";
import ${repo_name}Schema from "@dto/${repo_name}DTO"

class ${repo_name}Repository extends BaseRepository<${repo_name}Entity>{
    constructor () {
        super(${repo_name}Schema);
    }
}

Object.seal(${repo_name}Repository);
export default ${repo_name}Repository;`

export default repositoryDTO;