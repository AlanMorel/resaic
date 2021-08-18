import { User } from "@/database/Database";
import { error, exception, success } from "@/helpers/ControllerHelper";
import { Request, Response } from "express";

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
