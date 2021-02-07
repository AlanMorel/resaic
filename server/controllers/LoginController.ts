import { Response } from "express";
import RequestWithUser from "../database/interfaces";
import { exception, success } from "../helpers/ControllerHelper";

const DAY = 1000 * 60 * 60 * 24;

export default async (req: RequestWithUser, res: Response): Promise<void> => {
    if (req.session) {
        if (req.body.rememberMe) {
            req.session.cookie.maxAge = 30 * DAY;
        } else {
            req.session.cookie.maxAge = 1 * DAY;
        }
    }

    try {
        req.user.update({
            lastLoggedIn: new Date()
        });
    } catch (err) {
        exception(res, err);
    }

    success(res, {
        user: req.user.simplify()
    });
};
