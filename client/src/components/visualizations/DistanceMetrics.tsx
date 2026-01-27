import { useMemo } from 'react';
import './DistanceMetrics.css';

interface DistanceMetricsProps {
    point1: [number, number];
    point2: [number, number];
}

export function DistanceMetrics({ point1, point2 }: DistanceMetricsProps) {
    const width = 400;
    const height = 400;
    const padding = 50;

    const maxValue = useMemo(() => {
        return Math.max(Math.abs(point1[0]), Math.abs(point1[1]), Math.abs(point2[0]), Math.abs(point2[1]), 5);
    }, [point1, point2]);

    const scale = (width / 2 - padding) / maxValue;

    const toScreen = (x: number, y: number) => ({
        x: width / 2 + x * scale,
        y: height / 2 - y * scale
    });

    const p1 = toScreen(point1[0], point1[1]);
    const p2 = toScreen(point2[0], point2[1]);

    const l1Dist = Math.abs(point1[0] - point2[0]) + Math.abs(point1[1] - point2[1]);
    const l2Dist = Math.sqrt((point1[0] - point2[0]) ** 2 + (point1[1] - point2[1]) ** 2);

    return (
        <div className="distance-metrics-container">
            <div className="viz-header">
                <h3>Distance Metrics</h3>
                <div className="metrics-summary">
                    <div className="metric-item l2">
                        <span className="dot"></span>
                        <span className="label">L2 (Euclidean):</span>
                        <span className="value">{l2Dist.toFixed(2)}</span>
                    </div>
                    <div className="metric-item l1">
                        <span className="dot"></span>
                        <span className="label">L1 (Manhattan):</span>
                        <span className="value">{l1Dist.toFixed(2)}</span>
                    </div>
                </div>
            </div>

            <svg viewBox={`0 0 ${width} ${height}`} className="vector-svg">
                {/* Axes */}
                <line x1={padding} y1={height / 2} x2={width - padding} y2={height / 2} className="axis-line" />
                <line x1={width / 2} y1={padding} x2={width / 2} y2={height - padding} className="axis-line" />

                {/* L1 Path (Manhattan) */}
                <path
                    d={`M ${p1.x} ${p1.y} L ${p2.x} ${p1.y} L ${p2.x} ${p2.y}`}
                    className="distance-path l1-path"
                    fill="none"
                />

                {/* L2 Path (Euclidean) */}
                <line x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} className="distance-path l2-path" />

                {/* Points */}
                <circle cx={p1.x} cy={p1.y} r="6" className="point point1" />
                <text x={p1.x + 10} y={p1.y - 10} className="point-label">P1({point1[0]}, {point1[1]})</text>

                <circle cx={p2.x} cy={p2.y} r="6" className="point point2" />
                <text x={p2.x + 10} y={p2.y - 10} className="point-label">P2({point2[0]}, {point2[1]})</text>
            </svg>

            <div className="math-details">
                <div className="row">
                    <code>L2 = √Δx² + Δy²</code>
                    <code>L1 = |Δx| + |Δy|</code>
                </div>
            </div>
        </div>
    );
}
