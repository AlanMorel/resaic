import { Request, Response } from "express";

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

export default (req: Request, res: Response) => {
    const path = req.path;

    res.render("main", {
        layout: false,
        app,
        metaInfo,
        path
    });
};
