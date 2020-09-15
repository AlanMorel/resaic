import { Application } from "express";

import MainController from "../controllers/MainController";

import RegisterController from "../controllers/RegisterController";
import RegisterControllerPolicy from "../policies/RegisterControllerPolicy";

import LoginController from "../controllers/LoginController";
import LoginControllerPolicy from "../policies/LoginControllerPolicy";

import CheckUsernameController from "../controllers/CheckUsernameController";
import CheckUsernameControllerPolicy from "../policies/CheckUsernameControllerPolicy";

export default (app: Application): void => {
    app.post("/api/register", RegisterControllerPolicy, RegisterController);
    
    app.post("/api/login", LoginControllerPolicy, LoginController);

    app.post("/api/check-username", CheckUsernameControllerPolicy, CheckUsernameController);

    app.get("*", MainController);
};
