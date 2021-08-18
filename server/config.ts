import dotenv from "dotenv";

dotenv.config();

export default {
    port: process.env.PORT || 8083,
    env: process.env.NODE_ENV || "development",
    sessionSecret: process.env.SESSION_SECRET || "secret",
    projectRoot: __dirname.split("dist")[0].split("server")[0]
};
