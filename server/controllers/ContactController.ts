import { Contact } from "@/database/Database";
import { error, exception, success } from "@/helpers/ControllerHelper";
import { Request, Response } from "express";

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
