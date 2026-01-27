import { useRef } from 'react';
import './VectorVisualizer.css';

interface VectorVisualizerProps {
    vectors: [number, number][];
    labels?: string[];
}

export function VectorVisualizer({ vectors, labels }: VectorVisualizerProps) {
    const svgRef = useRef<SVGSVGElement>(null);
    const padding = 40;
    const width = 400;
    const height = 400;

    // Find max value for scaling
    const allCoords = vectors.flat();
    const maxValue = Math.max(Math.abs(Math.min(...allCoords, -1)), Math.abs(Math.max(...allCoords, 1)));
    const scale = (width / 2 - padding) / maxValue;

    const toScreen = (x: number, y: number) => ({
        x: width / 2 + x * scale,
        y: height / 2 - y * scale
    });

    return (
        <div className="vector-visualizer-container">
            <svg
                ref={svgRef}
                viewBox={`0 0 ${width} ${height}`}
                className="vector-svg"
            >
                {/* Grid Lines */}
                <defs>
                    <marker
                        id="arrowhead"
                        markerWidth="10"
                        markerHeight="7"
                        refX="10"
                        refY="3.5"
                        orient="auto"
                    >
                        <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                    </marker>
                </defs>

                {/* Axes */}
                <line
                    x1={padding} y1={height / 2}
                    x2={width - padding} y2={height / 2}
                    className="axis-line"
                />
                <line
                    x1={width / 2} y1={padding}
                    x2={width / 2} y2={height - padding}
                    className="axis-line"
                />

                {/* Grid markings */}
                {Array.from({ length: Math.floor(maxValue) * 2 + 1 }, (_, i) => i - Math.floor(maxValue)).map(val => {
                    if (val === 0) return null;
                    const pos = toScreen(val, val);
                    return (
                        <g key={val}>
                            <line
                                x1={pos.x} y1={height / 2 - 5}
                                x2={pos.x} y2={height / 2 + 5}
                                className="tick-line"
                            />
                            <line
                                x1={width / 2 - 5} y1={pos.y}
                                x2={width / 2 + 5} y2={pos.y}
                                className="tick-line"
                            />
                            <text
                                x={pos.x} y={height / 2 + 20}
                                className="tick-text"
                                textAnchor="middle"
                            >
                                {val}
                            </text>
                            <text
                                x={width / 2 - 20} y={pos.y + 5}
                                className="tick-text"
                                textAnchor="end"
                            >
                                {val}
                            </text>
                        </g>
                    );
                })}

                {/* Vectors */}
                {vectors.map((v, i) => {
                    const end = toScreen(v[0], v[1]);
                    const origin = toScreen(0, 0);
                    const colorClass = `vector-${i % 4}`;
                    return (
                        <g key={i} className={colorClass}>
                            <line
                                x1={origin.x}
                                y1={origin.y}
                                x2={end.x}
                                y2={end.y}
                                className="vector-line"
                                markerEnd="url(#arrowhead)"
                            />
                            <circle cx={end.x} cy={end.y} r="4" className="vector-point" />
                            {labels && labels[i] && (
                                <text
                                    x={end.x + 10}
                                    y={end.y - 10}
                                    className="vector-label"
                                >
                                    {labels[i]} ({v[0]}, {v[1]})
                                </text>
                            )}
                        </g>
                    );
                })}
            </svg>
        </div>
    );
}
