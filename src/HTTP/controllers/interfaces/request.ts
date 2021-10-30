import {Express} from "express"

interface IRequest<T> extends Express.Request {
    body : T
}

export default IRequest