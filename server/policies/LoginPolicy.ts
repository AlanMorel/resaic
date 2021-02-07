import { NextFunction, Request, Response } from "express";
import Passport from "passport";
import { UserModel } from "../database/models/User";
import { accept, reject } from "../helpers/PolicyHelper";

export default async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    Passport.authenticate("local", (err, user: UserModel, info) => {
        if (err) {
            reject(res, err);
            return;
        }

        if (!user) {
            reject(res, info.message);
            return;
        }

        req.logIn(user, err => {
            if (err) {
                reject(res, err);
            } else {
                accept(next);
            }
        });
    })(req, res, next);
};
