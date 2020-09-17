import Passport from "passport";
import LocalStrategy from "passport-local";
import bcrypt from "bcrypt";
import { User } from "../database/database";
import { UserModel } from "../database/models/User";
import { Op } from "sequelize";
import { Application } from "express";

export default (app: Application): void => {
    Passport.serializeUser((user: UserModel, done: Function) => {
        done(null, user.id);
    });

    Passport.deserializeUser((id: number, done: Function) => {
        User.findOne({
            where: {
                id: id
            }
        })
            .then(user => {
                done(null, user);
            })
            .catch(error => {
                done(error);
            });
    });

    Passport.use(new LocalStrategy.Strategy({
        usernameField: "identifier"
    },
    async (identifier: string, password: string, done: Function) => {
        const user = await User.findOne({
            where: {
                [Op.or]: [{
                    username: identifier
                }, {
                    email: identifier
                }]
            }
        });

        if (!user) {
            return done("Incorrect username or password.");
        }
        
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return done("Incorrect username or password.");
        }

        return done(null, user);
    }));

    app.use(Passport.initialize());
    app.use(Passport.session());
};
