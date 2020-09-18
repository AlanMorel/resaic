import { Request, Response } from "express";
import { success, error, exception } from "../helpers/ControllerHelper";
import { Contact } from "../database/database";

export default async (req: Request, res: Response): Promise<void> => {
    try {
        const contact = await Contact.create({
            ...req.body,
            ipAddress: req.ip
        });

        if (contact) {
            success(res);
        } else {
            error(res, "An error occurred sending your message. Please try again.");
        }
    } catch (err) {
        exception(res, err);
    }
};
