import { Application } from "express";

import MainController from "../controllers/MainController";

import RegisterPolicy from "../policies/RegisterPolicy";
import RegisterController from "../controllers/RegisterController";

import LoginPolicy from "../policies/LoginPolicy";
import LoginController from "../controllers/LoginController";

import CheckUsernamePolicy from "../policies/CheckUsernamePolicy";
import CheckUsernameController from "../controllers/CheckUsernameController";

import LogoutController from "../controllers/LogoutController";

import ContactPolicy from "../policies/ContactPolicy";
import ContactController from "../controllers/ContactController";

import AuthenticationPolicy from "../policies/AuthenticationPolicy";

import SettingsPolicy from "../policies/SettingsPolicy";
import SettingsController from "../controllers/SettingsController";

export default (app: Application): void => {
    app.post("/api/register", RegisterPolicy, RegisterController);

    app.post("/api/login", LoginPolicy, LoginController);

    app.post("/api/check-username", CheckUsernamePolicy, CheckUsernameController);

    app.post("/api/logout", LogoutController);

    app.post("/api/contact", ContactPolicy, ContactController);

    app.put("/api/settings", AuthenticationPolicy, SettingsPolicy, SettingsController);

    app.get("*", MainController);
};
