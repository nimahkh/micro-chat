const interfaceDto = (interface_name: string): string =>
    `import {Document} from "mongoose"

interface I${interface_name} extends Document {
    title: string;
}

export default I${interface_name}`

export default interfaceDto;