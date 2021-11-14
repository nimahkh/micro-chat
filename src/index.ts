import './pre-start'; // Must be the first import
import express from "express";
import Middlewares from "@middlewares/BaseMiddleware";
import DataAccess from "@dto/base";
import cors from "cors";

const app = express();
const port = parseInt(process.env.PORT!, 10) || 5000;
app.set("port", port);
app.use(Middlewares.configuration);
app.use(cors())

DataAccess.connect();

app.listen(port, () => {
    console.log("Node app is running at localhost:" + port);
});