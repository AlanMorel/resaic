import { Application, Request, Response } from "express";
import path from "path";

export default (app: Application) => {
    app.get("/", (req: Request, res: Response) => {
        res.sendFile(path.join(__dirname, "../app/public", "index.html"));
    });
};
