import { useState, useMemo } from 'react';
import './VectorAddition.css';

interface VectorAdditionProps {
    v1: [number, number];
    v2: [number, number];
}

export function VectorAddition({ v1, v2 }: VectorAdditionProps) {
    const [showResult, setShowResult] = useState(false);

    const width = 400;
    const height = 400;
    const padding = 40;

    const result = [v1[0] + v2[0], v1[1] + v2[1]];

    const maxValue = useMemo(() => {
        const coords = [...v1, ...v2, ...result];
        return Math.max(Math.abs(Math.min(...coords, -1)), Math.abs(Math.max(...coords, 1)));
    }, [v1, v2, result]);

    const scale = (width / 2 - padding) / maxValue;

    const toScreen = (x: number, y: number) => ({
        x: width / 2 + x * scale,
        y: height / 2 - y * scale
    });

    const p0 = toScreen(0, 0);
    const p1 = toScreen(v1[0], v1[1]);
    const p2 = toScreen(v2[0], v2[1]);
    const pRes = toScreen(result[0], result[1]);

    return (
        <div className="vector-addition-container">
            <div className="controls">
                <button
                    className={`btn-viz ${showResult ? 'active' : ''}`}
                    onClick={() => setShowResult(!showResult)}
                >
                    {showResult ? 'Hide Result' : 'Show Result (v1 + v2)'}
                </button>
            </div>

            <svg viewBox={`0 0 ${width} ${height}`} className="vector-svg">
                <defs>
                    <marker id="arrow-v1" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="var(--accent-primary)" />
                    </marker>
                    <marker id="arrow-v2" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="var(--accent-secondary)" />
                    </marker>
                    <marker id="arrow-res" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#EC4899" />
                    </marker>
                </defs>

                {/* Axes */}
                <line x1={padding} y1={height / 2} x2={width - padding} y2={height / 2} className="axis-line" />
                <line x1={width / 2} y1={padding} x2={width / 2} y2={height - padding} className="axis-line" />

                {/* Vector 1 */}
                <line x1={p0.x} y1={p0.y} x2={p1.x} y2={p1.y} className="vector-line v1" markerEnd="url(#arrow-v1)" />
                <text x={p1.x + 5} y={p1.y - 5} className="vector-label v1">v1</text>

                {/* Vector 2 */}
                <line x1={p0.x} y1={p0.y} x2={p2.x} y2={p2.y} className="vector-line v2" markerEnd="url(#arrow-v2)" />
                <text x={p2.x + 5} y={p2.y - 5} className="vector-label v2">v2</text>

                {showResult && (
                    <g className="result-animation">
                        {/* Parallelogram/Tip-to-tail guide */}
                        <line
                            x1={p1.x} y1={p1.y}
                            x2={pRes.x} y2={pRes.y}
                            className="guide-line"
                            strokeDasharray="4"
                        />
                        <line
                            x1={p2.x} y1={p2.y}
                            x2={pRes.x} y2={pRes.y}
                            className="guide-line"
                            strokeDasharray="4"
                        />

                        {/* Result Vector */}
                        <line
                            x1={p0.x} y1={p0.y}
                            x2={pRes.x} y2={pRes.y}
                            className="vector-line result"
                            markerEnd="url(#arrow-res)"
                        />
                        <text x={pRes.x + 5} y={pRes.y - 5} className="vector-label result">v1 + v2</text>
                    </g>
                )}
            </svg>

            <div className="formula-box">
                <code>[{v1[0]}, {v1[1]}] + [{v2[0]}, {v2[1]}] = [{result[0]}, {result[1]}]</code>
            </div>
        </div>
    );
}
