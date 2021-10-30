import express from "express"
import UserRoutes from "./Users";

const app = express();
class BaseRoutes {

    get routes() {
        app.use("/", new UserRoutes().routes);
        return app;
    }
}

export default BaseRoutes;