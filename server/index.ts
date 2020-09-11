import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";

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

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(PORT);

console.log(`[server]: Server is running at http://localhost:${PORT}`);
