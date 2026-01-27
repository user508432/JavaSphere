import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import type { Lesson } from '../types';
import { api } from '../services/api';
import { LessonRenderer } from '../components/content/LessonRenderer';
import './LessonPage.css';

export function LessonPage() {
    const { courseId, lessonId } = useParams<{ courseId: string; lessonId: string }>();
    const [lesson, setLesson] = useState<Lesson | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!lessonId) return;

        api.getLesson(lessonId)
            .then(setLesson)
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, [lessonId]);

    if (loading) {
        return (
            <div className="lesson-page">
                <div className="lesson-container">
                    <div className="skeleton" style={{ height: '40px', width: '200px', marginBottom: '2rem' }}></div>
                    <div className="skeleton" style={{ height: '60px', marginBottom: '2rem' }}></div>
                    <div className="skeleton" style={{ height: '200px', marginBottom: '1rem' }}></div>
                    <div className="skeleton" style={{ height: '100px', marginBottom: '1rem' }}></div>
                </div>
            </div>
        );
    }

    if (error || !lesson) {
        return (
            <div className="lesson-page">
                <div className="lesson-container">
                    <div className="error-state">
                        <h2>Lesson Not Found</h2>
                        <p>{error || 'The requested lesson could not be found.'}</p>
                        <Link to={`/courses/${courseId}`} className="btn btn-primary">
                            Back to Course
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="lesson-page">
            <div className="lesson-container">
                <nav className="lesson-breadcrumb">
                    <Link to="/courses">Courses</Link>
                    <span className="separator">›</span>
                    <Link to={`/courses/${courseId}`}>Course</Link>
                    <span className="separator">›</span>
                    <span className="current">{lesson.title}</span>
                </nav>

                <article className="lesson-article">
                    <LessonRenderer content={lesson.content} />
                </article>

                <footer className="lesson-footer">
                    <Link to={`/courses/${courseId}`} className="btn btn-secondary">
                        ← Back to Course
                    </Link>
                </footer>
            </div>
        </div>
    );
}
