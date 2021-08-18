import RequestWithUser from "@/database/Interfaces";
import { success } from "@/helpers/ControllerHelper";
import { Response } from "express";

export default async (req: RequestWithUser, res: Response): Promise<void> => {
    req.logout();
    success(res);
};
