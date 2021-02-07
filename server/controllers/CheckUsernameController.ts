import { Request, Response } from "express";
import { User } from "../database/database";
import { error, exception, success } from "../helpers/ControllerHelper";

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
        exception(res, err);
    }
};
