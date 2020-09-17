import { Response } from "express";
import { success } from "../helpers/ControllerHelper";
import RequestWithUser from "../database/interfaces";

export default async (req: RequestWithUser, res: Response): Promise<void> => {
    req.logout();
    success(res);
}
