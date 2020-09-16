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
