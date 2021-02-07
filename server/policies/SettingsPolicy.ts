import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import { accept, reject } from "../helpers/PolicyHelper";

export default async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const schema = Joi.object({
        country: Joi.string().allow("").optional(),
        city: Joi.string().allow("").optional(),
        bio: Joi.string().allow("").optional()
    });

    const { error } = schema.validate(req.body);

    if (error) {
        reject(res, error.details[0].message);
    } else {
        accept(next);
    }
};
