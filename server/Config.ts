import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const name = "Resaic";
const port = parseInt(process.env.PORT || "8083");
const origin = process.env.ORIGIN || "http://localhost:" + port;
const env = process.env.NODE_ENV || "development";
const root = __dirname.split("dist")[0].split("server")[0];
const version = fs.readFileSync(root + "version.txt");
const secret = process.env.SESSION_SECRET || "secret";

export default {
    name,
    port,
    origin,
    env,
    root,
    version,
    secret
};
