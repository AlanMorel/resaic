import { Response } from "express";
import { success, error } from "../helpers/ControllerHelper";
import RequestWithUser from "../database/interfaces";

const DAY = 1000 * 60 * 60 * 24;

export default async (req: RequestWithUser, res: Response): Promise<void> => {
    if (req.body.rememberMe) {
        // req.session.cookie.maxAge = 30 * DAY
    } else {
        // req.session.cookie.maxAge = 1 * DAY
    }

    try {
        // update logged in time
    } catch (err) {
        if (err.errors && err.errors.length) {
            error(res, err.errors[0].message);
        } else {
            error(res, "An unknown error occured.");
        }
    }

    success(res, {
        user: req.user.simplify()
    });
};
