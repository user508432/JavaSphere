import type { LessonContent as LessonContentType } from '../../types';
import { CodeBlock } from '../ui/CodeBlock';
import { visualizationRegistry } from '../visualizations';
import './LessonRenderer.css';

interface LessonRendererProps {
    content: LessonContentType[];
}

export function LessonRenderer({ content }: LessonRendererProps) {
    return (
        <div className="lesson-content">
            {content.map((block, index) => (
                <ContentBlock key={index} block={block} />
            ))}
        </div>
    );
}

function ContentBlock({ block }: { block: LessonContentType }) {
    switch (block.type) {
        case 'heading':
            return <HeadingBlock level={block.data.level || 1} text={block.data.text || ''} />;

        case 'paragraph':
            return <p className="lesson-paragraph">{block.data.text}</p>;

        case 'code':
            return (
                <CodeBlock
                    code={block.data.code || ''}
                    language={block.data.language}
                    showLineNumbers={true}
                />
            );

        case 'list':
            return (
                <ul className="lesson-list">
                    {block.data.items?.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            );

        case 'note':
            return (
                <div className="lesson-callout lesson-callout--note">
                    <span className="callout-icon">💡</span>
                    <div className="callout-content">{block.data.text}</div>
                </div>
            );

        case 'warning':
            return (
                <div className="lesson-callout lesson-callout--warning">
                    <span className="callout-icon">⚠️</span>
                    <div className="callout-content">{block.data.text}</div>
                </div>
            );

        case 'visualization':
            {
                const VizComponent = visualizationRegistry[block.data.visualizationType || ''];
                if (VizComponent) {
                    return (
                        <div className="lesson-visualization">
                            <VizComponent {...(block.data.props || {})} />
                        </div>
                    );
                }
                return (
                    <div className="lesson-visualization">
                        <div className="visualization-placeholder">
                            <span className="viz-icon">📊</span>
                            <span className="viz-label">{block.data.visualizationType}</span>
                            <span className="viz-hint">Visualizer not found in registry</span>
                        </div>
                    </div>
                );
            }

        case 'complexity':
            return (
                <div className="lesson-complexity">
                    <div className="complexity-item">
                        <span className="complexity-label">Time:</span>
                        <code>{block.data.time}</code>
                    </div>
                    <div className="complexity-item">
                        <span className="complexity-label">Space:</span>
                        <code>{block.data.space}</code>
                    </div>
                </div>
            );

        default:
            return null;
    }
}

function HeadingBlock({ level, text }: { level: number; text: string }) {
    const Tag = `h${Math.min(level, 6)}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    return <Tag className={`lesson-heading lesson-heading--${level}`}>{text}</Tag>;
}
