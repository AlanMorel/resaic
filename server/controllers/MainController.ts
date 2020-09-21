import { Response } from "express";
import RequestWithUser from "../database/interfaces";

const app = {
    slug: "resia",
    name: "Resia",
    domain: "resia.co"
};

const metaInfo = {
    title: "Resia",
    description: "Resia",
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
