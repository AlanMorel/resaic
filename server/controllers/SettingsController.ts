import { User } from "@/database/Database";
import RequestWithUser from "@/database/Interfaces";
import { exception, success } from "@/helpers/ControllerHelper";
import { Response } from "express";

export default async (req: RequestWithUser, res: Response): Promise<void> => {
    try {
        await User.update(
            {
                ...req.body
            },
            {
                where: {
                    id: req.user.id
                }
            }
        );
        req.user = Object.assign(req.user, req.body);
        success(res, {
            ...req.user.simplify()
        });
    } catch (err) {
        exception(res, err);
    }
};
