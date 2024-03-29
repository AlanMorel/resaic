import { accept, reject } from "@/helpers/PolicyHelper";
import { NextFunction, Request, Response } from "express";
import Joi from "joi";

export default async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const schema = Joi.object({
        name: Joi.string().alphanum().min(4).required(),
        email: Joi.string().email().min(5).required(),
        message: Joi.string().min(1).required()
    });

    const { error } = schema.validate(req.body);

    if (error) {
        reject(res, error.details[0].message);
    } else {
        accept(next);
    }
};
