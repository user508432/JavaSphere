import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import type { Course, Module } from '../types';
import { api } from '../services/api';
import { Card } from '../components/ui/Card';
import './CourseDetail.css';

export function CourseDetail() {
    const { courseId } = useParams<{ courseId: string }>();
    const [course, setCourse] = useState<Course | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [expandedModules, setExpandedModules] = useState<Set<string>>(new Set());

    useEffect(() => {
        if (!courseId) return;

        api.getCourse(courseId)
            .then(setCourse)
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, [courseId]);

    const toggleModule = (moduleId: string) => {
        setExpandedModules(prev => {
            const next = new Set(prev);
            if (next.has(moduleId)) {
                next.delete(moduleId);
            } else {
                next.add(moduleId);
            }
            return next;
        });
    };

    if (loading) {
        return (
            <div className="course-detail">
                <div className="skeleton" style={{ height: '200px', marginBottom: '2rem' }}></div>
                <div className="skeleton" style={{ height: '100px', marginBottom: '1rem' }}></div>
                <div className="skeleton" style={{ height: '100px', marginBottom: '1rem' }}></div>
            </div>
        );
    }

    if (error || !course) {
        return (
            <div className="course-detail">
                <div className="error-state">
                    <h2>Course Not Found</h2>
                    <p>{error || 'The requested course could not be found.'}</p>
                    <Link to="/courses" className="btn btn-primary">
                        Back to Courses
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="course-detail">
            {/* Course Header */}
            <header
                className="course-header"
                style={{ '--course-color': course.color } as React.CSSProperties}
            >
                <Link to="/courses" className="back-link">
                    ← All Courses
                </Link>
                <div className="course-header-content">
                    <span className="course-icon-large">{course.icon}</span>
                    <div>
                        <h1>{course.title}</h1>
                        <p>{course.description}</p>
                    </div>
                </div>
                <div className="course-stats-row">
                    <span className="stat">{course.modules.length} Modules</span>
                    <span className="stat">
                        {course.modules.reduce((sum, m) => sum + m.lessons.length, 0)} Lessons
                    </span>
                </div>
            </header>

            {/* Syllabus Tree */}
            <section className="syllabus">
                <h2 className="syllabus-title">Course Syllabus</h2>
                <div className="modules-list">
                    {course.modules.map((module, index) => (
                        <ModuleCard
                            key={module.id}
                            module={module}
                            courseId={course.id}
                            index={index}
                            isExpanded={expandedModules.has(module.id)}
                            onToggle={() => toggleModule(module.id)}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}

interface ModuleCardProps {
    module: Module;
    courseId: string;
    index: number;
    isExpanded: boolean;
    onToggle: () => void;
}

function ModuleCard({ module, courseId, index, isExpanded, onToggle }: ModuleCardProps) {
    return (
        <Card
            className={`module-card ${isExpanded ? 'expanded' : ''}`}
            padding="none"
        >
            <button
                className="module-header"
                onClick={onToggle}
                aria-expanded={isExpanded}
            >
                <div className="module-number">{index + 1}</div>
                <div className="module-info">
                    <h3>{module.title}</h3>
                    <p>{module.description}</p>
                </div>
                <div className="module-meta">
                    <span className="lesson-count">{module.lessons.length} lessons</span>
                    <span className={`expand-icon ${isExpanded ? 'rotated' : ''}`}>▼</span>
                </div>
            </button>

            {isExpanded && (
                <ul className="lessons-list">
                    {module.lessons.map((lesson, lessonIndex) => (
                        <li key={lesson.id} className="lesson-item">
                            <Link
                                to={`/courses/${courseId}/lessons/${lesson.id}`}
                                className="lesson-link"
                            >
                                <span className="lesson-number">{lessonIndex + 1}</span>
                                <span className="lesson-title">{lesson.title}</span>
                                <span className="lesson-arrow">→</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </Card>
    );
}
