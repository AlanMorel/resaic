import dotenv from "dotenv";

dotenv.config();

const getOrigin = (): string => {
    const docker = process.env.DOCKER ? true : false;
    if (docker) {
        return process.env.DOCKER_ORIGIN || `http://${name.toLowerCase()}.localhost`;
    } else {
        return process.env.ORIGIN || `http://localhost:${port}`;
    }
};

const name = "Resaic";
const port = parseInt(process.env.PORT || "8083");
const env = process.env.NODE_ENV || "development";
const root = `${process.cwd()}/`;
const version = parseInt(process.env.VERSION || "0");
const secret = process.env.SESSION_SECRET || "secret";
const origin = getOrigin();

const database = {
    host: process.env.DATABASE_HOST || "localhost",
    port: parseInt(process.env.DATABASE_PORT || "3306"),
    username: process.env.DATABASE_USERNAME || "root",
    passsword: process.env.DATABASE_PASSWORD || "",
    database: process.env.DATABASE_TABLE || ""
};

export default {
    name,
    port,
    origin,
    env,
    root,
    version,
    secret,
    database
};
