import { BuildOptions, Model, DataTypes, Sequelize } from "sequelize";

export interface ContactAttributes {
    id: number;
    name: string;
    email: string;
    message: string;
    ipAddress: string;
}

export interface ContactModel extends Model<ContactAttributes>, ContactAttributes {

}

export type ContactType = typeof Model & {
   new (values?: any, options?: BuildOptions): ContactModel;
};

export function ContactFactory (sequelize: Sequelize): ContactType {
    const Contact = <ContactType> sequelize.define("Contacts", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        message: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ipAddress: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    return Contact;
}
