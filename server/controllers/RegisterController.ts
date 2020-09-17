import { Request, Response } from "express";
import { success, error, exception } from "../helpers/ControllerHelper";
import { User } from "../database/database";

export default async (req: Request, res: Response): Promise<void> => {
    try {
        await User.create({
            ...req.body,
            ipAddress: req.ip
        });
        success(res);
    } catch (err) {
        exception(res, err);
    }
};
