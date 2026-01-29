import { Link } from 'react-router-dom';
import './Home.css';

export function Home() {

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
