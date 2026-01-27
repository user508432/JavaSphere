export class AppError extends Error {
    statusCode;
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}
export function errorHandler(err, _req, res, _next) {
    const statusCode = err instanceof AppError ? err.statusCode : 500;
    const message = err.message || 'Internal Server Error';
    console.error(`[Error] ${statusCode}: ${message}`);
    res.status(statusCode).json({
        success: false,
        error: message
    });
}
export function notFoundHandler(req, res) {
    res.status(404).json({
        success: false,
        error: `Route ${req.method} ${req.path} not found`
    });
}
//# sourceMappingURL=errorHandler.js.map