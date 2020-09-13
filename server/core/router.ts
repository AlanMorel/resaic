import { Application } from "express";

import MainController from "../controllers/MainController";

import RegisterController from "../controllers/RegisterController";
import RegisterControllerPolicy from "../policies/RegisterControllerPolicy";

export default (app: Application): void => {
    app.post("/api/register", RegisterControllerPolicy, RegisterController)

    app.get("*", MainController);
};
