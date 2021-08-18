import handlebars from "@/core/Handlebars";
import passport from "@/core/Passport";
import router from "@/core/Router";
import staticAssets from "@/core/Static";
import Database from "@/database/Database";
import connectSessionSequelize from "connect-session-sequelize";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import session from "express-session";
import helmet from "helmet";
import Config from "../Config";

const SequelizeStore = connectSessionSequelize(session.Store);
const store = new SequelizeStore({
    db: Database
});
store.sync();

const app = express();
app.use(cookieParser());
app.use(cors());
app.use(
    helmet({
        contentSecurityPolicy: false
    }) as express.RequestHandler
);
app.use(
    session({
        secret: Config.secret,
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

app.listen(Config.port);

console.log(`${Config.name} v${Config.version} is running at ${Config.origin} in ${Config.env} mode`);
