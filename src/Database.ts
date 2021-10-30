import mongoose from "mongoose"

function connect():void {
    const DbConnString : string = process.env.DB_CONN_STRING!.toString()
    mongoose.connect(DbConnString, {
        autoIndex: true,
        autoCreate : true,
        dbName: 'micro-chat'
    }, ()=>{
        console.log("Mongo Connected")
    })
}

export default connect;