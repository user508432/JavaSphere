import { useMemo } from 'react';
import './CosineSimilarity.css';

interface CosineSimilarityProps {
    v1: [number, number];
    v2: [number, number];
}

export function CosineSimilarity({ v1, v2 }: CosineSimilarityProps) {
    const width = 400;
    const height = 400;
    const padding = 60;

    const dotProduct = v1[0] * v2[0] + v1[1] * v2[1];
    const mag1 = Math.sqrt(v1[0] ** 2 + v1[1] ** 2);
    const mag2 = Math.sqrt(v2[0] ** 2 + v2[1] ** 2);
    const similarity = dotProduct / (mag1 * mag2);
    const angleRad = Math.acos(Math.min(Math.max(similarity, -1), 1));
    const angleDeg = (angleRad * 180) / Math.PI;

    const maxValue = useMemo(() => {
        return Math.max(Math.abs(Math.min(...v1, ...v2, -1)), Math.abs(Math.max(...v1, ...v2, 1)));
    }, [v1, v2]);

    const scale = (width / 2 - padding) / maxValue;

    const toScreen = (x: number, y: number) => ({
        x: width / 2 + x * scale,
        y: height / 2 - y * scale
    });

    const p0 = toScreen(0, 0);
    const p1 = toScreen(v1[0], v1[1]);
    const p2 = toScreen(v2[0], v2[1]);

    // Calculate arc for angle
    const arcRadius = 40;
    const startAngle = Math.atan2(v1[1], v1[0]);
    const endAngle = Math.atan2(v2[1], v2[0]);

    // SVG arc path
    const largeArcFlag = Math.abs(endAngle - startAngle) > Math.PI ? 1 : 0;
    const sweepFlag = endAngle > startAngle ? 0 : 1;

    const arcStartX = width / 2 + Math.cos(startAngle) * arcRadius;
    const arcStartY = height / 2 - Math.sin(startAngle) * arcRadius;
    const arcEndX = width / 2 + Math.cos(endAngle) * arcRadius;
    const arcEndY = height / 2 - Math.sin(endAngle) * arcRadius;

    const arcPath = `M ${arcStartX} ${arcStartY} A ${arcRadius} ${arcRadius} 0 ${largeArcFlag} ${sweepFlag} ${arcEndX} ${arcEndY}`;

    return (
        <div className="cosine-similarity-container">
            <div className="viz-header">
                <h3>Cosine Similarity</h3>
                <div className="similarity-value">
                    <span className="label">Similarity:</span>
                    <span className="value">{similarity.toFixed(3)}</span>
                </div>
            </div>

            <svg viewBox={`0 0 ${width} ${height}`} className="vector-svg">
                <defs>
                    <marker id="arrow-v1" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="var(--accent-primary)" />
                    </marker>
                    <marker id="arrow-v2" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="var(--accent-secondary)" />
                    </marker>
                </defs>

                {/* Axes */}
                <line x1={padding} y1={height / 2} x2={width - padding} y2={height / 2} className="axis-line" />
                <line x1={width / 2} y1={padding} x2={width / 2} y2={height - padding} className="axis-line" />

                {/* Angle Arc */}
                <path d={arcPath} fill="none" stroke="var(--warning)" strokeWidth="2" strokeDasharray="2" />
                <text
                    x={width / 2 + Math.cos((startAngle + endAngle) / 2) * (arcRadius + 20)}
                    y={height / 2 - Math.sin((startAngle + endAngle) / 2) * (arcRadius + 20)}
                    className="angle-label"
                    textAnchor="middle"
                >
                    {angleDeg.toFixed(1)}°
                </text>

                {/* Vector 1 */}
                <line x1={p0.x} y1={p0.y} x2={p1.x} y2={p1.y} className="vector-line v1" markerEnd="url(#arrow-v1)" />
                <text x={p1.x + 5} y={p1.y - 5} className="vector-label v1">v1</text>

                {/* Vector 2 */}
                <line x1={p0.x} y1={p0.y} x2={p2.x} y2={p2.y} className="vector-line v2" markerEnd="url(#arrow-v2)" />
                <text x={p2.x + 5} y={p2.y - 5} className="vector-label v2">v2</text>
            </svg>

            <div className="formula-display">
                <div className="formula-item">
                    <code>v1 · v2 = {dotProduct.toFixed(2)}</code>
                </div>
                <div className="formula-item">
                    <code>cos(θ) = (v1 · v2) / (||v1|| ||v2||) = {similarity.toFixed(3)}</code>
                </div>
            </div>
        </div>
    );
}
