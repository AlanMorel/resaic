import { Application } from "express";
import handlebars from "express-handlebars";
import config from "../config";

export default (app: Application): void => {
    const options = {
        helpers: {
            JSON: (object: any): string => JSON.stringify(object, null, 4)
        }
    };

    app.engine("handlebars", handlebars(options));
    app.set("view engine", "handlebars");
    app.set("views", config.projectRoot + "server/core");
};
