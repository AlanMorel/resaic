import { Sequelize } from "sequelize";
import { UserFactory } from "./models/User";
import { ContactFactory } from "./models/Contact";

const Database = new Sequelize({
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_TABLE,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

export const User = UserFactory(Database);
export const Contact = ContactFactory(Database);

export default Database;
