import { Response } from "express";
import fs from "fs";
import config from "../config";
import RequestWithUser from "../database/interfaces";

const app = {
    slug: "resaic",
    name: "Resaic",
    domain: "resaic.co"
};

const metaInfo = {
    title: "Resaic",
    description: "Resaic",
    image: "image"
};

const styles = config.env === "production" ? fs.readFileSync(config.projectRoot + "dist/production/css/index.css") : "";

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
