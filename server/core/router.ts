import { Application } from "express";

import MainController from "../controllers/MainController";

import RegisterController from "../controllers/RegisterController";
import RegisterControllerPolicy from "../policies/RegisterControllerPolicy";

import LoginController from "../controllers/LoginController";
import LoginControllerPolicy from "../policies/LoginControllerPolicy";

export default (app: Application): void => {
    app.post("/api/register", RegisterControllerPolicy, RegisterController);
    
    app.post("/api/login", LoginControllerPolicy, LoginController);

    app.get("*", MainController);
};
