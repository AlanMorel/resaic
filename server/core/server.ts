import config from "../config";
import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import session from "express-session";
import staticAssets from "./static";
import passport from "./passport";
import handlebars from "./handlebars";
import router from "./router";
import database from "../database/database";
import Sequelize from "../database/sequelize";

const app = express();
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors());
app.use(
    helmet({
        contentSecurityPolicy: false
    })
);
app.use(
    session({
        secret: config.sessionSecret,
        resave: false,
        saveUninitialized: false
    })
);

staticAssets(app);
passport(app);
handlebars(app);
router(app);

database();
Sequelize.sync();

app.listen(config.port);

console.log(`Server is running at http://localhost:${config.port}`);
