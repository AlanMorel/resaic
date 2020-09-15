import Passport from "passport";
import { Request, Response, NextFunction } from "express";
import { error } from "../helpers/ControllerHelper";

export default async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    Passport.authenticate("local", (err, user, info) => {
        if (err) {
            error(res, err);
            return;
        }

        if (!user) {
            error(res, info.message);
            return;
        }

        req.logIn(user, err => {
            if (err) {
                error(res, err);
                return;
            }

            next();
        });
    })(req, res, next);
};
