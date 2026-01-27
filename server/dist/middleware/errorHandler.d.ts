import { Request, Response, NextFunction } from 'express';
import { ApiResponse } from '../types/index.js';
export declare class AppError extends Error {
    statusCode: number;
    constructor(message: string, statusCode: number);
}
export declare function errorHandler(err: Error | AppError, _req: Request, res: Response<ApiResponse<null>>, _next: NextFunction): void;
export declare function notFoundHandler(req: Request, res: Response<ApiResponse<null>>): void;
//# sourceMappingURL=errorHandler.d.ts.map