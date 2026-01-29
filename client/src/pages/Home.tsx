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

            {/* High-Impact Course Summary Section */}
            <section className="impact-courses-section">
                <div className="impact-grid">
                    {/* Mathematics for AI */}
                    <div className="impact-card math-card">
                        <div className="impact-icon">📘</div>
                        <h2>Mathematics for AI</h2>
                        <div className="impact-content">
                            <p className="impact-subtitle">Build deep intuition behind modern AI systems</p>
                            <ul className="impact-list">
                                <li>Vectors, matrices & tensors used in real AI models</li>
                                <li>Similarity, projections & dimensionality reduction</li>
                                <li>Gradients, loss functions & optimization intuition</li>
                                <li>PCA, attention mechanisms & latent spaces</li>
                            </ul>
                            <div className="impact-footer">
                                <span className="impact-tag">👉 Understand how AI really works under the hood</span>
                            </div>
                        </div>
                    </div>

                    {/* DSA */}
                    <div className="impact-card dsa-card">
                        <div className="impact-icon">💻</div>
                        <h2>Data Structures & Algorithms – I</h2>
                        <div className="impact-content">
                            <p className="impact-subtitle">Learn how efficient software is built</p>
                            <ul className="impact-list">
                                <li>Searching & sorting algorithms</li>
                                <li>Lists, stacks, queues & hashing</li>
                                <li>Trees, heaps & priority queues</li>
                                <li>Algorithm analysis & performance thinking</li>
                            </ul>
                            <div className="impact-footer">
                                <span className="impact-tag">👉 Think like a computer scientist</span>
                            </div>
                        </div>
                    </div>

                    {/* Web Development */}
                    <div className="impact-card web-card">
                        <div className="impact-icon">🌐</div>
                        <h2>Fundamentals of Web Development</h2>
                        <div className="impact-content">
                            <p className="impact-subtitle">From internet basics to full deployment</p>
                            <ul className="impact-list">
                                <li>HTML, CSS & responsive layouts</li>
                                <li>JavaScript fundamentals & DOM</li>
                                <li>Forms, APIs & async programming</li>
                                <li>Performance, SEO & deployment</li>
                            </ul>
                            <div className="impact-footer">
                                <span className="impact-tag">👉 Build, optimize and deploy real websites</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why These Courses Section */}
            <section className="why-section">
                <h2 className="section-title">🚀 Why These Courses?</h2>
                <div className="why-grid">
                    <div className="why-card">
                        <h3>Designed for AI & tech foundations</h3>
                    </div>
                    <div className="why-card">
                        <h3>Focus on intuition + real applications</h3>
                    </div>
                    <div className="why-card">
                        <h3>No rote learning — concepts first</h3>
                    </div>
                </div>
            </section>
        </div>
    );
}
