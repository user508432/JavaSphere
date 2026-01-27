import { Request, Response, NextFunction } from 'express';
import { ApiResponse } from '../types/index.js';

export class AppError extends Error {
    statusCode: number;

    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
    }
}

export function errorHandler(
    err: Error | AppError,
    _req: Request,
    res: Response<ApiResponse<null>>,
    _next: NextFunction
): void {
    const statusCode = err instanceof AppError ? err.statusCode : 500;
    const message = err.message || 'Internal Server Error';

    console.error(`[Error] ${statusCode}: ${message}`);

    res.status(statusCode).json({
        success: false,
        error: message
    });
}

export function notFoundHandler(
    req: Request,
    res: Response<ApiResponse<null>>
): void {
    res.status(404).json({
        success: false,
        error: `Route ${req.method} ${req.path} not found`
    });
}
