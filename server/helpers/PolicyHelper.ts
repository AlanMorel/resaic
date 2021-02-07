import { NextFunction, Response } from "express";

export function reject(res: Response, error: string, status = 200): void {
    res.status(status).json({
        success: false,
        error
    });
}

export function accept(next: NextFunction): void {
    next();
}

export function isForbiddenUsername(username: string): boolean {
    return ["login", "signup", "changelog"].includes(username);
}
