import Joi from "joi";
import { accept, reject } from "../helpers/PolicyHelper";
import { Request, Response, NextFunction } from "express";

export default async (req: Request, res: Response, next: NextFunction) => {
    const schema = Joi.object({
        username: Joi.string().alphanum().min(4).required(),
        email: Joi.string().email().min(5).required(),
        password: Joi.string().min(8).max(255).required()
    });

    const { error } = schema.validate(req.body);

    if (error) {
        reject(res, error.details[0].message);
    } else {
        accept(next);
    }
}
