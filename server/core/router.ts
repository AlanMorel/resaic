import { Application } from "express";
import CheckUsernameController from "../controllers/CheckUsernameController";
import ContactController from "../controllers/ContactController";
import LoginController from "../controllers/LoginController";
import LogoutController from "../controllers/LogoutController";
import MainController from "../controllers/MainController";
import RegisterController from "../controllers/RegisterController";
import SettingsController from "../controllers/SettingsController";
import AuthenticationPolicy from "../policies/AuthenticationPolicy";
import CheckUsernamePolicy from "../policies/CheckUsernamePolicy";
import ContactPolicy from "../policies/ContactPolicy";
import LoginPolicy from "../policies/LoginPolicy";
import RegisterPolicy from "../policies/RegisterPolicy";
import SettingsPolicy from "../policies/SettingsPolicy";

export default (app: Application): void => {
    app.post("/api/register", RegisterPolicy, RegisterController);

    app.post("/api/login", LoginPolicy, LoginController);

    app.post("/api/check-username", CheckUsernamePolicy, CheckUsernameController);

    app.post("/api/logout", LogoutController);

    app.post("/api/contact", ContactPolicy, ContactController);

    app.put("/api/settings", AuthenticationPolicy, SettingsPolicy, SettingsController);

    app.get("*", MainController);
};
