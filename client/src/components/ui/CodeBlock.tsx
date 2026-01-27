import { useState } from 'react';
import './CodeBlock.css';

interface CodeBlockProps {
    code: string;
    language?: string;
    showLineNumbers?: boolean;
    title?: string;
}

export function CodeBlock({
    code,
    language = 'text',
    showLineNumbers = true,
    title
}: CodeBlockProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const lines = code.split('\n');

    return (
        <div className="code-block">
            {title && (
                <div className="code-block-header">
                    <span className="code-block-title">{title}</span>
                    <span className="code-block-language">{language}</span>
                </div>
            )}
            <div className="code-block-container">
                <button
                    className="code-copy-btn"
                    onClick={handleCopy}
                    aria-label="Copy code"
                >
                    {copied ? '✓ Copied!' : '📋 Copy'}
                </button>
                <pre className="code-pre">
                    <code className={`language-${language}`}>
                        {showLineNumbers ? (
                            lines.map((line, i) => (
                                <div key={i} className="code-line">
                                    <span className="line-number">{i + 1}</span>
                                    <span className="line-content">{line || ' '}</span>
                                </div>
                            ))
                        ) : (
                            code
                        )}
                    </code>
                </pre>
            </div>
        </div>
    );
}
