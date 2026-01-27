export interface Course {
    id: string;
    title: string;
    description: string;
    icon: string;
    color: string;
    modules: Module[];
}

export interface Module {
    id: string;
    courseId: string;
    title: string;
    description: string;
    order: number;
    lessons: Lesson[];
}

export interface Lesson {
    id: string;
    moduleId: string;
    title: string;
    order: number;
    content: LessonContent[];
}

export type ContentType =
    | 'heading'
    | 'paragraph'
    | 'code'
    | 'list'
    | 'note'
    | 'warning'
    | 'visualization'
    | 'complexity';

export interface LessonContent {
    type: ContentType;
    data: ContentData;
}

export interface ContentData {
    text?: string;
    level?: number;
    language?: string;
    code?: string;
    items?: string[];
    visualizationType?: string;
    props?: Record<string, unknown>;
    time?: string;
    space?: string;
}

export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
}
