import { Sequelize } from "sequelize";
import { UserFactory } from "./models/User";

const Database = new Sequelize({
    host: "localhost",
    username: "root",
    password: "",
    database: "resia",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

export const User = UserFactory(Database);

export default Database;
