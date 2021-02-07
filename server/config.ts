import path from "path";
import dotenv from "dotenv";

dotenv.config();

export default {
    port: process.env.PORT || 3000,
    env: process.env.NODE_ENV || "development",
    sessionSecret: process.env.SESSION_SECRET || "secret",
    projectRoot: path.join(__dirname, "../").replace("dist\\", "")
};
