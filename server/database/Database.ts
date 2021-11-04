import Config from "@/Config";
import { Sequelize } from "sequelize";
import { ContactFactory } from "./models/Contact";
import { UserFactory } from "./models/User";

const Database = new Sequelize({
    dialect: "mysql",
    host: Config.database.host,
    port: Config.database.port,
    username: Config.database.username,
    password: Config.database.passsword,
    database: Config.database.database,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

export const User = UserFactory(Database);
export const Contact = ContactFactory(Database);

export default Database;
