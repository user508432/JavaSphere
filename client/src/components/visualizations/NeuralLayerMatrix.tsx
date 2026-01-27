import { useMemo } from 'react';
import './NeuralLayerMatrix.css';

interface NeuralLayerMatrixProps {
    inputSize: number;
    outputSize: number;
}

export function NeuralLayerMatrix({ inputSize, outputSize }: NeuralLayerMatrixProps) {
    const width = 600;
    const height = 400;

    const inputNodes = useMemo(() => {
        const nodes = [];
        const spacing = (height - 100) / (inputSize - 1 || 1);
        const startY = inputSize === 1 ? height / 2 : 50;
        for (let i = 0; i < inputSize; i++) {
            nodes.push({ x: 100, y: startY + i * spacing });
        }
        return nodes;
    }, [inputSize, height]);

    const outputNodes = useMemo(() => {
        const nodes = [];
        const spacing = (height - 100) / (outputSize - 1 || 1);
        const startY = outputSize === 1 ? height / 2 : 50;
        for (let i = 0; i < outputSize; i++) {
            nodes.push({ x: width - 100, y: startY + i * spacing });
        }
        return nodes;
    }, [outputSize, width, height]);

    return (
        <div className="neural-layer-container">
            <div className="viz-header">
                <h3>Neural Network Layer (Matrix Mul)</h3>
                <p>{inputSize} Inputs → {outputSize} Outputs</p>
            </div>

            <svg viewBox={`0 0 ${width} ${height}`} className="neural-svg">
                {/* Connections (Weights) */}
                {inputNodes.map((input, i) =>
                    outputNodes.map((output, j) => (
                        <g key={`w-${i}-${j}`} className="weight-connection">
                            <line
                                x1={input.x} y1={input.y}
                                x2={output.x} y2={output.y}
                                className="weight-line"
                            />
                            <text
                                x={(input.x + output.x) / 2}
                                y={(input.y + output.y) / 2 - 5}
                                className="weight-label"
                            >
                                w{j + 1}{i + 1}
                            </text>
                        </g>
                    ))
                )}

                {/* Nodes */}
                {inputNodes.map((node, i) => (
                    <g key={`in-${i}`}>
                        <circle cx={node.x} cy={node.y} r="20" className="node input-node" />
                        <text x={node.x} y={node.y} className="node-text" textAnchor="middle" dominantBaseline="middle">
                            x{i + 1}
                        </text>
                    </g>
                ))}

                {inputNodes.length > 0 && (
                    <text x={inputNodes[0].x} y={25} className="layer-label" textAnchor="middle">Input Vector x</text>
                )}

                {outputNodes.map((node, j) => (
                    <g key={`out-${j}`}>
                        <circle cx={node.x} cy={node.y} r="20" className="node output-node" />
                        <text x={node.x} y={node.y} className="node-text" textAnchor="middle" dominantBaseline="middle">
                            y{j + 1}
                        </text>
                    </g>
                ))}

                {outputNodes.length > 0 && (
                    <text x={outputNodes[0].x} y={25} className="layer-label" textAnchor="middle">Output Vector y</text>
                )}
            </svg>

            <div className="math-explanation">
                <code>y = Wx</code>
                <div className="matrix-eq">
                    <span className="vector-symbol">y</span>
                    <span>=</span>
                    <span className="matrix-symbol">[{outputSize}×{inputSize}]</span>
                    <span className="vector-symbol">x</span>
                </div>
            </div>
        </div>
    );
}
