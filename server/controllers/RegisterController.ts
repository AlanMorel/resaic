import { User } from "@/database/Database";
import { error, exception, success } from "@/helpers/ControllerHelper";
import { Request, Response } from "express";

export default async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await User.create({
            ...req.body,
            ipAddress: req.ip
        });

        if (user) {
            success(res);
        } else {
            error(res, "An error occurred creating your account. Please try again.");
        }
    } catch (err) {
        exception(res, err);
    }
};
