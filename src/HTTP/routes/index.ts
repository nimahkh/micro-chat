import express from "express"
import UserRoutes from "./Users";
import MessageRoutes from "./Messages";

const app = express();
class BaseRoutes {

    get routes() {
        app.use("/", new UserRoutes().create);
        app.use("/message", new MessageRoutes().create);
        return app;
    }
}

export default BaseRoutes;