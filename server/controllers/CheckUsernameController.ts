import { Request, Response } from "express";
import { success, error, exception } from "../helpers/ControllerHelper";
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
        exception(res, err);
    }
};
