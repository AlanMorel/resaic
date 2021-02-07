import { Response } from "express";
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
        store
    });
};
