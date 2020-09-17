import { Request, Response } from "express";
import { error, success } from "../helpers/ControllerHelper";
import { User } from "../database/database";

export default async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await User.findOne({
            where: {
                username: req.body.username
            }
        });

        if (user) {
            error(res, "This username is unavailable");
        } else {
            success(res);
        }
    } catch (err) {
        if (err.errors && err.errors.length) {
            error(res, err.errors[0].message);
        } else {
            error(res, "An unknown error occured.");
        }
    }
};
