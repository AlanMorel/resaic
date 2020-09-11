import express from "express";
import path from "path";

const projectRoot = path.join(__dirname, "../");

export default (app: express.Application) => {
    app.use("/dist", express.static(path.join(projectRoot, "/dist/development")));
};
