import bcrypt from "bcrypt";
import { DataTypes } from "sequelize";
import Sequelize from "../sequelize";

const hashPassword = async (user: any) => {
    user.password = await bcrypt.hash(user.password, 10);
};

const User = Sequelize.define("user", 
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ipAddress: {
            type: DataTypes.STRING,
            allowNull: true
        },
        banned: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        lastLoggedIn: {
            type: DataTypes.DATE,
            allowNull: true
        },
        country: {
            type: DataTypes.STRING,
            allowNull: true
        },
        city: {
            type: DataTypes.STRING,
            allowNull: true
        },
        bio: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    }, 
    {
        hooks: {
            beforeCreate: hashPassword
        }
    }
);

User.prototype.simplify = function() {
    const user = Object.assign({}, this.get());
    delete user.password;
    delete user.banned;
    delete user.ipAddress;
    delete user.createdAt;
    delete user.updatedAt;
    return user;
};

export default User;
