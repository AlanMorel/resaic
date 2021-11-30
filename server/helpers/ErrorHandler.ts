import { Logger } from "@/tools/Logger";
import { NextFunction, Request, Response } from "express";

export default (err: any, req: Request, res: Response, next: NextFunction): void => {
    Logger.error(`500 error on path: ${req.originalUrl}, file: ${err.path}`);
    Logger.error(err.message);

    res.redirect("/");
};
