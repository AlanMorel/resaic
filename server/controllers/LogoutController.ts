import { Response } from "express";
import RequestWithUser from "../database/interfaces";
import { success } from "../helpers/ControllerHelper";

export default async (req: RequestWithUser, res: Response): Promise<void> => {
    req.logout();
    success(res);
};
