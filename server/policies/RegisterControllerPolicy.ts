import Joi from "joi";
import { accept, reject, isForbiddenUsername } from "../helpers/PolicyHelper";
import { Request, Response, NextFunction } from "express";

export default async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    if (isForbiddenUsername(req.body.username)) {
        reject(res, "This username is unavailable");
        return;
    }
    
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
};
