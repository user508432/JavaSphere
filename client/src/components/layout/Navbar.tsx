import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import './Navbar.css';

export function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-brand">
                    <span className="brand-icon">🎓</span>
                    <span className="brand-text">EduPlatform</span>
                </Link>

                <div className="navbar-links">
                    <Link
                        to="/"
                        className={`nav-link ${isActive('/') ? 'active' : ''}`}
                    >
                        Home
                    </Link>
                    <Link
                        to="/courses"
                        className={`nav-link ${location.pathname.startsWith('/courses') ? 'active' : ''}`}
                    >
                        Courses
                    </Link>
                </div>

                <button
                    className="theme-toggle"
                    onClick={toggleTheme}
                    aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                >
                    <span className="theme-icon">
                        {theme === 'light' ? '🌙' : '☀️'}
                    </span>
                </button>
            </div>
        </nav>
    );
}
