import Passport from "passport";
import LocalStrategy from "passport-local";
import User from "../database/models/User";
import { Op } from "sequelize";
import { Application } from "express";

export default (app: Application): void => {
    Passport.serializeUser((user: any, done: Function) => {
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
            return done("Incorrect username or password");
        }

        // do password check here

        return done(null, user);
    }));

    app.use(Passport.initialize());
    app.use(Passport.session());
};
