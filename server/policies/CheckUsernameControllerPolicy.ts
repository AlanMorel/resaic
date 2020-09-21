import Joi from "joi";
import { accept, reject, isForbiddenUsername } from "../helpers/PolicyHelper";
import { Request, Response, NextFunction } from "express";

export default async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    if (isForbiddenUsername(req.body.username)) {
        reject(res, "This username is unavailable");
        return;
    }

    const schema = Joi.object({
        username: Joi.string().alphanum().required().min(4)
    });

    const { error } = schema.validate(req.body);

    if (error) {
        reject(res, error.details[0].message);
    } else {
        accept(next);
    }
};
