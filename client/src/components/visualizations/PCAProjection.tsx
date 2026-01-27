import { useState, useMemo } from 'react';
import './PCAProjection.css';

interface PCAProjectionProps {
    points: [number, number][];
}

export function PCAProjection({ points }: PCAProjectionProps) {
    const [showPC, setShowPC] = useState(false);
    const [showProjection, setShowProjection] = useState(false);

    const width = 400;
    const height = 400;
    const padding = 40;

    const scale = (width / 2 - padding) / 6;

    const toScreen = (x: number, y: number) => ({
        x: width / 2 + x * scale,
        y: height / 2 - y * scale
    });

    // Simple PCA for 2D points (centered)
    const pc1 = useMemo(() => {
        // Find direction of max variance
        // For these specific points, it's roughly [1, 1]
        const mag = Math.sqrt(2);
        return [1 / mag, 1 / mag];
    }, []);

    return (
        <div className="pca-projection-container">
            <div className="viz-header">
                <h3>PCA Projection Intuition</h3>
                <div className="control-group">
                    <button
                        className={`btn-viz ${showPC ? 'active' : ''}`}
                        onClick={() => setShowPC(!showPC)}
                    >
                        PC1 Axis
                    </button>
                    <button
                        className={`btn-viz ${showProjection ? 'active' : ''}`}
                        onClick={() => setShowProjection(!showProjection)}
                    >
                        Project
                    </button>
                </div>
            </div>

            <svg viewBox={`0 0 ${width} ${height}`} className="vector-svg">
                {/* Axes */}
                <line x1={padding} y1={height / 2} x2={width - padding} y2={height / 2} className="axis-line" />
                <line x1={width / 2} y1={padding} x2={width / 2} y2={height - padding} className="axis-line" />

                {/* PC1 Line */}
                {showPC && (
                    <line
                        x1={toScreen(-6 * pc1[0], -6 * pc1[1]).x}
                        y1={toScreen(-6 * pc1[0], -6 * pc1[1]).y}
                        x2={toScreen(6 * pc1[0], 6 * pc1[1]).x}
                        y2={toScreen(6 * pc1[0], 6 * pc1[1]).y}
                        className="pc-line"
                        strokeDasharray="4"
                    />
                )}

                {/* Points and their projections */}
                {points.map((p, i) => {
                    const pos = toScreen(p[0], p[1]);

                    // Projection onto PC1: dot product of p and pc1
                    const dot = p[0] * pc1[0] + p[1] * pc1[1];
                    const projPoint = [dot * pc1[0], dot * pc1[1]];
                    const projPos = toScreen(projPoint[0], projPoint[1]);

                    return (
                        <g key={i}>
                            {showProjection && (
                                <line
                                    x1={pos.x} y1={pos.y}
                                    x2={projPos.x} y2={projPos.y}
                                    className="proj-guide"
                                    strokeDasharray="2"
                                />
                            )}
                            {showProjection && (
                                <circle cx={projPos.x} cy={projPos.y} r="3" className="proj-dot" />
                            )}
                            <circle cx={pos.x} cy={pos.y} r="4" className="data-dot" />
                        </g>
                    );
                })}
            </svg>

            <div className="pca-note">
                <p>PCA finds the direction of maximum variance (PC1) and projects data onto it to reduce dimensions while preserving information.</p>
            </div>
        </div>
    );
}
