import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import router from "./router";

const app = express();
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors());
app.use(
    helmet({
        contentSecurityPolicy: false
    })
);

const PORT = 8000;

app.listen(PORT);

router(app);

console.log(`[server]: Server is running at http://localhost:${PORT}`);
