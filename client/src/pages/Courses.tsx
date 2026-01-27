import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { Course } from '../types';
import { api } from '../services/api';
import { Card } from '../components/ui/Card';
import './Courses.css';

export function Courses() {
    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        api.getCourses()
            .then(setCourses)
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="courses-page">
            <header className="courses-header">
                <h1>All Courses</h1>
                <p>Explore our comprehensive curriculum covering AI mathematics, data structures, and web development.</p>
            </header>

            {loading && (
                <div className="courses-list">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="skeleton course-list-skeleton"></div>
                    ))}
                </div>
            )}

            {error && (
                <div className="error-message">
                    <p>Failed to load courses: {error}</p>
                </div>
            )}

            {!loading && !error && (
                <div className="courses-list">
                    {courses.map((course, index) => (
                        <Link
                            key={course.id}
                            to={`/courses/${course.id}`}
                            className="course-list-item animate-in"
                            style={{ animationDelay: `${index * 80}ms` }}
                        >
                            <Card variant="default" padding="lg" className="course-list-card">
                                <div className="course-list-content">
                                    <div
                                        className="course-list-icon"
                                        style={{ background: course.color }}
                                    >
                                        {course.icon}
                                    </div>
                                    <div className="course-list-info">
                                        <h2>{course.title}</h2>
                                        <p>{course.description}</p>
                                        <div className="course-list-meta">
                                            <span>{course.modules.length} Modules</span>
                                            <span>•</span>
                                            <span>
                                                {course.modules.reduce((sum, m) => sum + m.lessons.length, 0)} Lessons
                                            </span>
                                        </div>
                                    </div>
                                    <span className="course-list-arrow">→</span>
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
