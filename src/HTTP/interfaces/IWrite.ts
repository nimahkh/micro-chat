import {Types} from "mongoose";

export interface IWrite<T> {
    create: (item:T, callback: (error: any, result: any ) => void) => void;
    update:(_id: Types.ObjectId, item:T, callback: (error: any, result: any)=> void) => void ;
    delete: (_id: string, callback: (error: any, result: any) => void) => void;
}
