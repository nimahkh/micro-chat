import mongoose from "mongoose";

class DataAccess {
    static mongooseInstance: any;
    static mongooseConnection: mongoose.Connection;

    constructor () {
        DataAccess.connect();
    }

    static connect (): mongoose.Connection {
        if(this.mongooseInstance) {
            return this.mongooseInstance;
        }

        this.mongooseConnection  = mongoose.connection;
        this.mongooseConnection.once("open", () => {
            console.log("Mongodb Connected.");
        });

        const DbConnString : string = process.env.DB_CONN_STRING!

        this.mongooseInstance = mongoose.connect(DbConnString, {
            autoIndex: true,
            autoCreate : true,
            dbName: 'micro-chat'
        });

        return this.mongooseInstance;
    }
}

export default DataAccess;