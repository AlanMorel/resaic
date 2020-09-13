import config from "../config";
import express, { Application } from "express";

export default (app: Application): void => {
    app.use("/dist", express.static(config.projectRoot + "/dist/" + config.env));
    app.use("/assets", express.static(config.projectRoot + "/app/assets"));
};
