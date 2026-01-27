import type { Course, Lesson, Module, ApiResponse } from '../types';

const API_BASE = import.meta.env.PROD
    ? '/api'
    : 'http://localhost:3001/api';

async function fetchApi<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${API_BASE}${endpoint}`);

    if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
    }

    const json: ApiResponse<T> = await response.json();

    if (!json.success || !json.data) {
        throw new Error(json.error || 'Unknown error');
    }

    return json.data;
}

export const api = {
    // Get all courses
    getCourses: () => fetchApi<Course[]>('/courses'),

    // Get single course with modules
    getCourse: (id: string) => fetchApi<Course>(`/courses/${id}`),

    // Get modules for a course
    getCourseModules: (courseId: string) => fetchApi<Module[]>(`/courses/${courseId}/modules`),

    // Get lessons for a module
    getModuleLessons: (moduleId: string) => fetchApi<Lesson[]>(`/courses/modules/${moduleId}/lessons`),

    // Get single lesson content
    getLesson: (lessonId: string) => fetchApi<Lesson>(`/courses/lessons/${lessonId}`),
};

export default api;
