import bcrypt from "bcrypt";
import { Application } from "express";
import Passport from "passport";
import LocalStrategy from "passport-local";
import { Op } from "sequelize";
import { User } from "../database/database";

export default (app: Application): void => {
    Passport.serializeUser((user: any, done: any) => {
        done(null, user.id);
    });

    Passport.deserializeUser((id: number, done: any) => {
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
    }, async (identifier: string, password: string, done: any) => {
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
