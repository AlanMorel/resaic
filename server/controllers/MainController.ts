import RequestWithUser from "@/database/Interfaces";
import { Response } from "express";
import fs from "fs";
import Config from "../Config";

const app = {
    slug: "resaic",
    domain: "resaic.co",
    ...Config
};

const metaInfo = {
    title: "Resaic",
    description: "Resaic",
    image: "image"
};

const styles = Config.env === "production" ? fs.readFileSync(Config.root + "dist/production/css/index.css") : "";

export default (req: RequestWithUser, res: Response): void => {
    const user = req.user && req.isAuthenticated() ? req.user.simplify() : null;

    const store = {
        user: {
            loggedIn: req.isAuthenticated(),
            ...user
        }
    };

    res.render("main", {
        layout: false,
        app,
        metaInfo,
        path: req.path,
        store,
        styles
    });
};
