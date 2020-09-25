import { BuildOptions, Model, DataTypes, Sequelize } from "sequelize";
import bcrypt from "bcrypt";

export interface UserAttributes {
    id: number;
    username: string;
    email: string;
    password: string;
    ipAddress: string;
    banned: boolean;
    lastLoggedIn: Date;
    country: string;
    city: string;
    bio: string;
}

export interface UserModel extends Model<UserAttributes>, UserAttributes {

}

export type UserType = typeof Model & {
   new (values?: any, options?: BuildOptions): UserModel;
};

export function UserFactory (sequelize: Sequelize): UserType {
    const User = <UserType> sequelize.define("users", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
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
    }, {
        hooks: {
            beforeCreate: hashPassword
        }
    });

    User.prototype.simplify = function(): void {
        const user = Object.assign({}, this.get());
        delete user.password;
        delete user.banned;
        delete user.lastLoggedIn;
        delete user.ipAddress;
        delete user.createdAt;
        delete user.updatedAt;
        return user;
    };

    return User;
}

const hashPassword = async (user: UserModel): Promise<void> => {
    user.password = await bcrypt.hash(user.password, 10);
};
