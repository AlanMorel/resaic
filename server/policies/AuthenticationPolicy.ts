import { accept, reject } from "@/helpers/PolicyHelper";
import { NextFunction, Request, Response } from "express";

export default async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    if (!req.isAuthenticated()) {
        reject(res, "You must be logged in to perform this action.", 401);
        return;
    }
    accept(next);
};
