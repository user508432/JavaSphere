import { useMemo } from 'react';
import './Eigenvectors.css';

interface EigenvectorsProps {
    matrix: [[number, number], [number, number]];
}

export function Eigenvectors({ matrix }: EigenvectorsProps) {
    const width = 400;
    const height = 400;
    const padding = 50;
    const gridSize = 4;

    const scale = (width / 2 - padding) / gridSize;

    const toScreen = (x: number, y: number) => ({
        x: width / 2 + x * scale,
        y: height / 2 - y * scale
    });

    const origin = toScreen(0, 0);

    // Calculate eigenvectors/values for a 2x2 matrix
    // This is a simplified calculation for real eigenvalues
    const ev = useMemo(() => {
        const a = matrix[0][0];
        const b = matrix[0][1];
        const c = matrix[1][0];
        const d = matrix[1][1];

        const tr = a + d;
        const det = a * d - b * c;
        const disc = Math.sqrt(tr * tr / 4 - det);

        const lambda1 = tr / 2 + disc;
        const lambda2 = tr / 2 - disc;

        const results = [];

        if (!isNaN(lambda1)) {
            // Av = lambda v => (a-lambda)x + by = 0 => x/y = -b/(a-lambda)
            let v1: [number, number];
            if (b !== 0) v1 = [b, lambda1 - a];
            else if (c !== 0) v1 = [lambda1 - d, c];
            else v1 = [1, 0];

            // Normalize
            const mag = Math.sqrt(v1[0] ** 2 + v1[1] ** 2);
            results.push({ lambda: lambda1, vector: [v1[0] / mag, v1[1] / mag] as [number, number] });
        }

        if (!isNaN(lambda2) && lambda2 !== lambda1) {
            let v2: [number, number];
            if (b !== 0) v2 = [b, lambda2 - a];
            else if (c !== 0) v2 = [lambda2 - d, c];
            else v2 = [0, 1];

            const mag = Math.sqrt(v2[0] ** 2 + v2[1] ** 2);
            results.push({ lambda: lambda2, vector: [v2[0] / mag, v2[1] / mag] as [number, number] });
        }

        return results;
    }, [matrix]);

    return (
        <div className="eigenvectors-container">
            <div className="viz-header">
                <h3>Eigenvectors & Values</h3>
                <div className="ev-list">
                    {ev.map((item, i) => (
                        <div key={i} className={`ev-item ev-${i}`}>
                            <span className="lambda">λ = {item.lambda.toFixed(2)}</span>
                            <span className="vector">v = [{item.vector[0].toFixed(2)}, {item.vector[1].toFixed(2)}]</span>
                        </div>
                    ))}
                    {ev.length === 0 && <p className="no-ev">No real eigenvalues</p>}
                </div>
            </div>

            <svg viewBox={`0 0 ${width} ${height}`} className="vector-svg">
                <defs>
                    <marker id="arrow-ev0" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#6366F1" />
                    </marker>
                    <marker id="arrow-ev1" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#EC4899" />
                    </marker>
                </defs>

                {/* Axes */}
                <line x1={padding} y1={height / 2} x2={width - padding} y2={height / 2} className="axis-line" />
                <line x1={width / 2} y1={padding} x2={width / 2} y2={height - padding} className="axis-line" />

                {ev.map((item, i) => {
                    const pStart = toScreen(-item.vector[0] * gridSize, -item.vector[1] * gridSize);
                    const pEnd = toScreen(item.vector[0] * gridSize, item.vector[1] * gridSize);
                    const pVec = toScreen(item.vector[0], item.vector[1]);

                    return (
                        <g key={i}>
                            {/* Line spans through origin */}
                            <line
                                x1={pStart.x} y1={pStart.y}
                                x2={pEnd.x} y2={pEnd.y}
                                className={`ev-line ev-line-${i}`}
                                strokeDasharray="4"
                            />
                            {/* Vector itself */}
                            <line
                                x1={origin.x} y1={origin.y}
                                x2={pVec.x} y2={pVec.y}
                                className={`vector-line ev-vec-${i}`}
                                markerEnd={`url(#arrow-ev${i})`}
                            />
                        </g>
                    );
                })}
            </svg>

            <p className="ev-note">Eigenvectors are directions that are only scaled by the matrix transformation.</p>
        </div>
    );
}
