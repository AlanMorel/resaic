import config from "../config";
import express, { Application } from "express";
import path from "path";

const projectRoot = path.join(__dirname, "../../");

export default (app: Application):void => {
    app.use("/dist", express.static(projectRoot + "/dist/" + config.env));
    app.use("/assets", express.static(projectRoot + "/app/assets"));
};
