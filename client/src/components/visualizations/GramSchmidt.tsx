import { useState, useMemo } from 'react';
import './GramSchmidt.css';

interface GramSchmidtProps {
    vectors: [number, number][];
}

export function GramSchmidt({ vectors: initialVectors }: GramSchmidtProps) {
    const [step, setStep] = useState(0);
    const width = 400;
    const height = 400;
    const padding = 50;

    const maxValue = useMemo(() => {
        const coords = initialVectors.flat();
        return Math.max(Math.abs(Math.min(...coords, -1)), Math.abs(Math.max(...coords, 1)), 3);
    }, [initialVectors]);

    const scale = (width / 2 - padding) / maxValue;

    const toScreen = (x: number, y: number) => ({
        x: width / 2 + x * scale,
        y: height / 2 - y * scale
    });

    // Step-by-step calculation
    const v1 = initialVectors[0];
    const v2 = initialVectors[1];

    // Orthogonalization
    const u1 = v1; // Basis 1 (not normalized yet for visual clarity)
    const magU1Sq = u1[0] ** 2 + u1[1] ** 2;
    const projV2onU1 = [((v2[0] * u1[0] + v2[1] * u1[1]) / magU1Sq) * u1[0], ((v2[0] * u1[0] + v2[1] * u1[1]) / magU1Sq) * u1[1]];
    const u2 = [v2[0] - projV2onU1[0], v2[1] - projV2onU1[1]];

    const p0 = toScreen(0, 0);
    const pv1 = toScreen(v1[0], v1[1]);
    const pv2 = toScreen(v2[0], v2[1]);
    const pProj = toScreen(projV2onU1[0], projV2onU1[1]);
    const pu2 = toScreen(u2[0], u2[1]);

    const steps = [
        { label: "Original Vectors", description: "Start with two independent vectors v₁ and v₂." },
        { label: "Set u₁ = v₁", description: "The first basis vector u₁ is simply v₁." },
        { label: "Project v₂ onto u₁", description: "Calculate the shadow (projection) of v₂ on the u₁ direction." },
        { label: "Subtract Projection", description: "Subtract the projection from v₂ to get u₂, which is perpendicular to u₁." }
    ];

    return (
        <div className="gram-schmidt-container">
            <div className="viz-header">
                <h3>Gram-Schmidt Process</h3>
                <div className="step-controls">
                    <button onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0}>Prev</button>
                    <span>Step {step + 1} of {steps.length}</span>
                    <button onClick={() => setStep(Math.min(steps.length - 1, step + 1))} disabled={step === steps.length - 1}>Next</button>
                </div>
            </div>

            <p className="step-description">{steps[step].description}</p>

            <svg viewBox={`0 0 ${width} ${height}`} className="vector-svg">
                <defs>
                    <marker id="arrow-gs-v1" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="var(--accent-primary)" />
                    </marker>
                    <marker id="arrow-gs-v2" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="var(--accent-secondary)" />
                    </marker>
                    <marker id="arrow-gs-u2" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#10B981" />
                    </marker>
                </defs>

                {/* Axes */}
                <line x1={padding} y1={height / 2} x2={width - padding} y2={height / 2} className="axis-line" />
                <line x1={width / 2} y1={padding} x2={width / 2} y2={height - padding} className="axis-line" />

                {/* Step 0: Both vectors */}
                {(step >= 0) && (
                    <>
                        <line x1={p0.x} y1={p0.y} x2={pv1.x} y2={pv1.y} className="vector-line v1" markerEnd="url(#arrow-gs-v1)" />
                        <line x1={p0.x} y1={p0.y} x2={pv2.x} y2={pv2.y} className="vector-line v2" markerEnd="url(#arrow-gs-v2)" />
                        <text x={pv1.x + 5} y={pv1.y - 5} className="vector-label v1">v1</text>
                        <text x={pv2.x + 5} y={pv2.y - 5} className="vector-label v2">v2</text>
                    </>
                )}

                {/* Step 2: Projection */}
                {step >= 2 && (
                    <>
                        <line x1={p0.x} y1={p0.y} x2={pProj.x} y2={pProj.y} className="proj-line" strokeDasharray="4" />
                        <circle cx={pProj.x} cy={pProj.y} r="3" fill="var(--warning)" />
                        <text x={pProj.x} y={pProj.y + 20} className="tick-text" textAnchor="middle">proj(v2, u1)</text>
                        {/* Line from tip of v2 to projection point */}
                        <line x1={pv2.x} y1={pv2.y} x2={pProj.x} y2={pProj.y} className="guide-line" strokeDasharray="2" />
                    </>
                )}

                {/* Step 3: u2 */}
                {step >= 3 && (
                    <>
                        <line x1={p0.x} y1={p0.y} x2={pu2.x} y2={pu2.y} className="vector-line u2" markerEnd="url(#arrow-gs-u2)" />
                        <text x={pu2.x + 5} y={pu2.y - 5} className="vector-label u2">u2 (⊥ u1)</text>
                    </>
                )}
            </svg>
        </div>
    );
}
