import express from "express"
import bodyParser from "body-parser"
import BaseRoutes from "../routes";
import MethodOverride from "./OverrideMiddleware";

class MiddlewaresBase {
    static get configuration () {
        const app = express();
        app.use(bodyParser.json());
        app.use(MethodOverride.configuration());
        app.use(new BaseRoutes().routes);
        return app;
    }
}
Object.seal(MiddlewaresBase);
export = MiddlewaresBase;