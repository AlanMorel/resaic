import handlebars from "express-handlebars";
import { Application } from "express";

export default (app: Application) => {
    const options = {
        helpers: {
            JSON: (object: Object) => JSON.stringify(object, null, 4)
        }
    };

    app.engine("handlebars", handlebars(options));
    app.set("view engine", "handlebars");
    app.set("views", __dirname);
};
