import { useState, useMemo } from 'react';
import './MatrixTransform.css';

interface MatrixTransformProps {
    matrix: [[number, number], [number, number]];
    label?: string;
}

export function MatrixTransform({ matrix, label }: MatrixTransformProps) {
    const [transformProgress, setTransformProgress] = useState(0);

    const width = 400;
    const height = 400;
    const padding = 60;

    const gridSize = 4;
    const step = 1;

    // Linear interpolation between identity and target matrix
    const currentMatrix = useMemo(() => {
        const t = transformProgress / 100;
        return [
            [1 + t * (matrix[0][0] - 1), t * matrix[0][1]],
            [t * matrix[1][0], 1 + t * (matrix[1][1] - 1)]
        ];
    }, [matrix, transformProgress]);

    const maxValue = 5; // Fixed range for grid
    const scale = (width / 2 - padding) / maxValue;

    const toScreen = (x: number, y: number) => ({
        x: width / 2 + x * scale,
        y: height / 2 - y * scale
    });

    const gridLines = useMemo(() => {
        const lines = [];
        // Horizontal lines
        for (let y = -gridSize; y <= gridSize; y += step) {
            const p1 = toScreen(-gridSize, y);
            const p2 = toScreen(gridSize, y);
            lines.push({ x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y, type: 'grid' });
        }
        // Vertical lines
        for (let x = -gridSize; x <= gridSize; x += step) {
            const p1 = toScreen(x, -gridSize);
            const p2 = toScreen(x, gridSize);
            lines.push({ x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y, type: 'grid' });
        }
        return lines;
    }, []);

    const transformedGridLines = useMemo(() => {
        const lines = [];
        const m = currentMatrix;

        // Transform horizontal lines
        for (let y = -gridSize; y <= gridSize; y += step) {
            const p1Raw = { x: -gridSize * m[0][0] + y * m[0][1], y: -gridSize * m[1][0] + y * m[1][1] };
            const p2Raw = { x: gridSize * m[0][0] + y * m[0][1], y: gridSize * m[1][0] + y * m[1][1] };
            const p1 = toScreen(p1Raw.x, p1Raw.y);
            const p2 = toScreen(p2Raw.x, p2Raw.y);
            lines.push({ x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y, type: 'transformed', isBold: y === 0 });
        }

        // Transform vertical lines
        for (let x = -gridSize; x <= gridSize; x += step) {
            const p1Raw = { x: x * m[0][0] + -gridSize * m[0][1], y: x * m[1][0] + -gridSize * m[1][1] };
            const p2Raw = { x: x * m[0][0] + gridSize * m[0][1], y: x * m[1][0] + gridSize * m[1][1] };
            const p1 = toScreen(p1Raw.x, p1Raw.y);
            const p2 = toScreen(p2Raw.x, p2Raw.y);
            lines.push({ x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y, type: 'transformed', isBold: x === 0 });
        }
        return lines;
    }, [currentMatrix]);

    const unitI = toScreen(currentMatrix[0][0], currentMatrix[1][0]);
    const unitJ = toScreen(currentMatrix[0][1], currentMatrix[1][1]);
    const origin = toScreen(0, 0);

    return (
        <div className="matrix-transform-container">
            <div className="viz-header">
                <h3>{label || 'Matrix Transformation'}</h3>
                <div className="matrix-display">
                    <div className="bracket left">[</div>
                    <div className="values">
                        <div className="row">
                            <span>{matrix[0][0]}</span>
                            <span>{matrix[0][1]}</span>
                        </div>
                        <div className="row">
                            <span>{matrix[1][0]}</span>
                            <span>{matrix[1][1]}</span>
                        </div>
                    </div>
                    <div className="bracket right">]</div>
                </div>
            </div>

            <div className="slider-control">
                <label>Transform Progress</label>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={transformProgress}
                    onChange={(e) => setTransformProgress(parseInt(e.target.value))}
                />
            </div>

            <svg viewBox={`0 0 ${width} ${height}`} className="vector-svg">
                <defs>
                    <marker id="arrow-i" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="var(--accent-primary)" />
                    </marker>
                    <marker id="arrow-j" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="var(--accent-secondary)" />
                    </marker>
                </defs>

                {/* Background Grid (Identity) */}
                {gridLines.map((l, i) => (
                    <line key={`g-${i}`} {...l} className="grid-line-bg" />
                ))}

                {/* Transformed Grid */}
                {transformedGridLines.map((l, i) => (
                    <line
                        key={`t-${i}`}
                        {...l}
                        className={`grid-line-transformed ${l.isBold ? 'bold' : ''}`}
                    />
                ))}

                {/* Basis Vectors */}
                <line
                    x1={origin.x} y1={origin.y}
                    x2={unitI.x} y2={unitI.y}
                    className="basis-vector i"
                    markerEnd="url(#arrow-i)"
                />
                <line
                    x1={origin.x} y1={origin.y}
                    x2={unitJ.x} y2={unitJ.y}
                    className="basis-vector j"
                    markerEnd="url(#arrow-j)"
                />
                <text x={unitI.x + 5} y={unitI.y - 5} className="basis-label i">î</text>
                <text x={unitJ.x + 5} y={unitJ.y - 5} className="basis-label j">ĵ</text>
            </svg>
        </div>
    );
}
