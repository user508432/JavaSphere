import { useState, useEffect } from 'react';
import './SortingVisualizer.css';

export function SortingVisualizer() {
    const [array, setArray] = useState<number[]>([]);
    const [sorting, setSorting] = useState(false);
    const [comparing, setComparing] = useState<[number, number] | null>(null);
    const [swapping, setSwapping] = useState<[number, number] | null>(null);
    const [completed, setCompleted] = useState<number[]>([]);

    useEffect(() => {
        resetArray();
    }, []);

    const resetArray = () => {
        const newArray = Array.from({ length: 15 }, () => Math.floor(Math.random() * 80) + 10);
        setArray(newArray);
        setComparing(null);
        setSwapping(null);
        setCompleted([]);
    };

    const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    const bubbleSort = async () => {
        if (sorting) return;
        setSorting(true);
        const arr = [...array];
        const n = arr.length;

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                setComparing([j, j + 1]);
                await sleep(200);

                if (arr[j] > arr[j + 1]) {
                    setSwapping([j, j + 1]);
                    await sleep(200);
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    setArray([...arr]);
                    setSwapping(null);
                }
                setComparing(null);
            }
            setCompleted(prev => [...prev, n - i - 1]);
        }
        setSorting(false);
    };

    return (
        <div className="sorting-visualizer">
            <div className="viz-header">
                <h3>Bubble Sort Animation</h3>
                <div className="controls">
                    <button onClick={resetArray} disabled={sorting}>Reset</button>
                    <button onClick={bubbleSort} disabled={sorting} className="btn-primary">Start Sort</button>
                </div>
            </div>

            <div className="bars-container">
                {array.map((value, idx) => {
                    const isComparing = comparing?.includes(idx);
                    const isSwapping = swapping?.includes(idx);
                    const isCompleted = completed.includes(idx);

                    let status = '';
                    if (isSwapping) status = 'swapping';
                    else if (isComparing) status = 'comparing';
                    else if (isCompleted) status = 'completed';

                    return (
                        <div
                            key={idx}
                            className={`bar ${status}`}
                            style={{ height: `${value}%` }}
                        >
                            <span className="bar-value">{value}</span>
                        </div>
                    );
                })}
            </div>

            <div className="algo-info">
                <div className="complexity-tag">Time: O(n²)</div>
                <div className="complexity-tag">Space: O(1)</div>
            </div>
        </div>
    );
}
