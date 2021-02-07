import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import ComplexityObject, { ComplexityOptions } from "joi-password-complexity";
import { accept, isForbiddenUsername, reject } from "../helpers/PolicyHelper";

export default async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    if (isForbiddenUsername(req.body.username)) {
        reject(res, "This username is unavailable");
        return;
    }

    const passwordComplexityOptions: ComplexityOptions = {
        min: 8,
        max: 255,
        lowerCase: 1,
        upperCase: 1,
        numeric: 1,
        symbol: 0,
        requirementCount: 3
    };

    const schema = Joi.object({
        username: Joi.string().alphanum().min(4).required(),
        email: Joi.string().email().min(5).required(),
        password: ComplexityObject(passwordComplexityOptions)
    });

    const { error } = schema.validate(req.body);

    if (error) {
        reject(res, error.details[0].message);
    } else {
        accept(next);
    }
};
