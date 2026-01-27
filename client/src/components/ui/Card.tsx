import { type ReactNode } from 'react';
import './Card.css';

interface CardProps {
    children: ReactNode;
    className?: string;
    variant?: 'default' | 'elevated' | 'outlined' | 'gradient';
    padding?: 'none' | 'sm' | 'md' | 'lg';
    onClick?: () => void;
    href?: string;
    as?: 'div' | 'article' | 'section';
}

export function Card({
    children,
    className = '',
    variant = 'default',
    padding = 'md',
    onClick,
    as: Component = 'div'
}: CardProps) {
    const classNames = [
        'card',
        `card--${variant}`,
        `card--padding-${padding}`,
        onClick ? 'card--clickable' : '',
        className
    ].filter(Boolean).join(' ');

    return (
        <Component className={classNames} onClick={onClick}>
            {children}
        </Component>
    );
}

// Sub-components
Card.Header = function CardHeader({ children, className = '' }: { children: ReactNode; className?: string }) {
    return <div className={`card-header ${className}`}>{children}</div>;
};

Card.Body = function CardBody({ children, className = '' }: { children: ReactNode; className?: string }) {
    return <div className={`card-body ${className}`}>{children}</div>;
};

Card.Footer = function CardFooter({ children, className = '' }: { children: ReactNode; className?: string }) {
    return <div className={`card-footer ${className}`}>{children}</div>;
};
