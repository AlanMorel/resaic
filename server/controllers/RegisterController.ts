import { Request, Response } from "express";
import { error, success } from "../helpers/ControllerHelper";

import User from "../database/models/User";

export default async (req: Request, res: Response): Promise<void> => {
    try {
        await User.create({
            ...req.body,
            ipAddress: req.ip
        });
        success(res);
    } catch (err) {
        if (err.errors && err.errors.length) {
            error(res, err.errors[0].message);
        } else {
            error(res, "An unknown error occured.");
        }
    }
};
