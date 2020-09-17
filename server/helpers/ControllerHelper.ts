import { Response } from "express";

export function success(res: Response, data: any = null, status = 200): void {
    res.status(status).json({
        success: true,
        ...data
    });
}

export function error(res: Response, error: string, status = 200): void {
    res.status(status).json({
        success: false,
        error
    });
}

export function exception(res: Response, err: any): void {
    if (err.errors && err.errors.length) {
        error(res, err.errors[0].message);
    } else {
        error(res, "An unknown error occured.");
    }
}
