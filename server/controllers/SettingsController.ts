import { Response } from "express";
import { User } from "../database/database";
import RequestWithUser from "../database/interfaces";
import { exception, success } from "../helpers/ControllerHelper";

export default async (req: RequestWithUser, res: Response): Promise<void> => {
    try {
        await User.update({
            ...req.body
        }, {
            where: {
                id: req.user.id
            }
        });
        req.user = Object.assign(req.user, req.body);
        success(res, {
            ...req.user.simplify()
        });
    } catch (err) {
        exception(res, err);
    }
};
