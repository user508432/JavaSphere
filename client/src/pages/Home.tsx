import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { Course } from '../types';
import { api } from '../services/api';
import { Card } from '../components/ui/Card';
import './Home.css';

export function Home() {
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
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Master <span className="gradient-text">AI, Coding</span> & Web
                    </h1>
                    <p className="hero-subtitle">
                        Interactive lessons, beautiful visualizations, and hands-on learning
                        for Mathematics, Data Structures, and Web Development.
                    </p>
                    <div className="hero-actions">
                        <Link to="/courses" className="btn btn-primary">
                            Start Learning
                        </Link>
                        <a href="#courses" className="btn btn-secondary">
                            Explore Courses
                        </a>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="hero-orb orb-1"></div>
                    <div className="hero-orb orb-2"></div>
                    <div className="hero-orb orb-3"></div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats">
                <div className="stat-item">
                    <span className="stat-number">3</span>
                    <span className="stat-label">Courses</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">50+</span>
                    <span className="stat-label">Lessons</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">20+</span>
                    <span className="stat-label">Visualizations</span>
                </div>
            </section>

            {/* Courses Section */}
            <section id="courses" className="courses-section">
                <h2 className="section-title">Featured Courses</h2>

                {loading && (
                    <div className="courses-grid">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="skeleton course-skeleton"></div>
                        ))}
                    </div>
                )}

                {error && (
                    <div className="error-message">
                        <p>Failed to load courses. Please try again later.</p>
                        <p className="error-detail">{error}</p>
                    </div>
                )}

                {!loading && !error && (
                    <div className="courses-grid">
                        {courses.map((course, index) => (
                            <Link
                                key={course.id}
                                to={`/courses/${course.id}`}
                                className="course-card-link"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <Card
                                    variant="elevated"
                                    padding="lg"
                                    className="course-card animate-in"
                                >
                                    <div
                                        className="course-icon"
                                        style={{ background: `linear-gradient(135deg, ${course.color}, ${course.color}99)` }}
                                    >
                                        {course.icon}
                                    </div>
                                    <Card.Header>
                                        <h3>{course.title}</h3>
                                    </Card.Header>
                                    <Card.Body>
                                        <p>{course.description}</p>
                                    </Card.Body>
                                    <Card.Footer>
                                        <span className="course-meta">
                                            {course.modules.length} Modules
                                        </span>
                                    </Card.Footer>
                                </Card>
                            </Link>
                        ))}
                    </div>
                )}
            </section>

            {/* Features Section */}
            <section className="features-section">
                <h2 className="section-title">Why Choose Us</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <span className="feature-icon">📊</span>
                        <h3>Interactive Visualizations</h3>
                        <p>Understand complex concepts through beautiful, interactive diagrams and animations.</p>
                    </div>
                    <div className="feature-card">
                        <span className="feature-icon">🎯</span>
                        <h3>Structured Learning</h3>
                        <p>Follow a carefully designed curriculum that builds knowledge step by step.</p>
                    </div>
                    <div className="feature-card">
                        <span className="feature-icon">💻</span>
                        <h3>Code Examples</h3>
                        <p>Learn with real code examples in Python, Java, and JavaScript.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
