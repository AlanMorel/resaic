import config from "./config";
import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import staticAssets from "./core/static";
import handlebars from "./core/handlebars";
import router from "./core/router";

const app = express();
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors());
app.use(
    helmet({
        contentSecurityPolicy: false
    })
);

staticAssets(app);
handlebars(app);
router(app);

app.listen(config.port);

console.log(`Server is running at http://localhost:${config.port}`);
