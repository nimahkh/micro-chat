const entityDTO = (entity_name: string)=>
    `import {I${entity_name}} from "./interfaces";
import {Document} from "mongoose"

class ${entity_name}Entity extends Document {
    private _${entity_name.toLowerCase()}: I${entity_name};

    constructor(${entity_name.toLowerCase()}: I${entity_name}) {
        super()
        this._${entity_name.toLowerCase()} = ${entity_name.toLowerCase()};
    }

    get title (): string {
        return this._${entity_name.toLowerCase()}.title;
    }
}

Object.seal(${entity_name}Entity);

export default ${entity_name}Entity;`

export default entityDTO;