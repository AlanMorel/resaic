import dotenv from "dotenv";

dotenv.config();

const getRoot = (): string => {
    const root = __dirname.split("dist")[0].split("server")[0];
    root.endsWith("/") ? root.slice(0, -1) : root;
    return root;
};

const getOrigin = (): string => {
    const docker = process.env.DOCKER ? true : false;
    if (docker) {
        return process.env.DOCKER_ORIGIN || "http://" + name.toLowerCase() + ".localhost";
    } else {
        return process.env.ORIGIN || "http://localhost:" + port;
    }
};

const name = "Resaic";
const port = parseInt(process.env.PORT || "8083");
const env = process.env.NODE_ENV || "development";
const root = getRoot();
const version = parseInt(process.env.VERSION || "0");
const secret = process.env.SESSION_SECRET || "secret";
const origin = getOrigin();

console.log(origin);

export default {
    name,
    port,
    origin,
    env,
    root,
    version,
    secret
};
