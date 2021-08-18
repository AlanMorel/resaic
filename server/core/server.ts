import compression from "compression";
import connectSessionSequelize from "connect-session-sequelize";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import session from "express-session";
import helmet from "helmet";
import config from "../config";
import Database from "../database/database";
import handlebars from "./handlebars";
import passport from "./passport";
import router from "./router";
import staticAssets from "./static";

const SequelizeStore = connectSessionSequelize(session.Store);
const store = new SequelizeStore({
    db: Database
});
store.sync();

const app = express();
app.use(cookieParser());
app.use(cors());
app.use(compression());
app.use(
    helmet({
        contentSecurityPolicy: false
    }) as express.RequestHandler
);
app.use(
    session({
        secret: config.sessionSecret,
        resave: false,
        saveUninitialized: false,
        store: store
    })
);

staticAssets(app);
passport(app);
handlebars(app);
router(app);

Database.sync();

app.listen(config.port);

console.log(`Server is running at http://localhost:${config.port}`);
