import { Application } from "express";

import MainController from "../controllers/MainController";

export default (app: Application) => {
    app.get("*", MainController);
};
