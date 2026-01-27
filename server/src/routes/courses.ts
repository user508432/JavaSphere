import { Router, Request, Response, NextFunction } from 'express';
import { courses } from '../data/courses.js';
import { ApiResponse, Course, Module, Lesson } from '../types/index.js';
import { AppError } from '../middleware/errorHandler.js';

const router = Router();

// GET /api/courses - List all courses
router.get('/', (_req: Request, res: Response<ApiResponse<Course[]>>) => {
    const courseSummaries = courses.map(c => ({
        ...c,
        modules: c.modules.map(m => ({ ...m, lessons: [] }))
    }));
    res.json({ success: true, data: courseSummaries });
});

// GET /api/courses/:id - Get course with modules
router.get('/:id', (req: Request, res: Response<ApiResponse<Course>>, next: NextFunction) => {
    const course = courses.find(c => c.id === req.params.id);
    if (!course) {
        return next(new AppError('Course not found', 404));
    }
    res.json({ success: true, data: course });
});

// GET /api/courses/:id/modules - Get modules for course
router.get('/:id/modules', (req: Request, res: Response<ApiResponse<Module[]>>, next: NextFunction) => {
    const course = courses.find(c => c.id === req.params.id);
    if (!course) {
        return next(new AppError('Course not found', 404));
    }
    res.json({ success: true, data: course.modules });
});

// GET /api/modules/:id/lessons - Get lessons for module
router.get('/modules/:moduleId/lessons', (req: Request, res: Response<ApiResponse<Lesson[]>>, next: NextFunction) => {
    for (const course of courses) {
        const mod = course.modules.find(m => m.id === req.params.moduleId);
        if (mod) {
            return res.json({ success: true, data: mod.lessons });
        }
    }
    next(new AppError('Module not found', 404));
});

// GET /api/lessons/:id - Get lesson content
router.get('/lessons/:lessonId', (req: Request, res: Response<ApiResponse<Lesson>>, next: NextFunction) => {
    for (const course of courses) {
        for (const mod of course.modules) {
            const lesson = mod.lessons.find(l => l.id === req.params.lessonId);
            if (lesson) {
                return res.json({ success: true, data: lesson });
            }
        }
    }
    next(new AppError('Lesson not found', 404));
});

export default router;
