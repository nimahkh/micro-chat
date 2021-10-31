const dtoDTO = (dto_name: string): string =>
    `import ${dto_name}Model from "../entities/${dto_name}Entity";
import {model, Schema} from "mongoose"

class ${dto_name}Schema {
    static get schema() {
        return new Schema({
                title: {
                    type: String,
                    required: true
                },
            },
            {
                timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}
            });
    }
}

const schema = model<${dto_name}Model>("${dto_name}", ${dto_name}Schema.schema);

export default schema`

export default dtoDTO;