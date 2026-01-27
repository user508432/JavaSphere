import { useState } from 'react';
import './LinkedListDiagram.css';

interface Node {
    id: number;
    value: string;
    next: number | null;
}

export function LinkedListDiagram() {
    const [nodes, setNodes] = useState<Node[]>([
        { id: 1, value: "Head", next: 2 },
        { id: 2, value: "Data A", next: 3 },
        { id: 3, value: "Data B", next: null }
    ]);

    const addNode = () => {
        const id = nodes.length > 0 ? Math.max(...nodes.map(n => n.id)) + 1 : 1;
        const lastNode = nodes[nodes.length - 1];

        const newNode: Node = { id, value: "New", next: null };
        const newNodes = [...nodes];

        if (lastNode) {
            newNodes[newNodes.length - 1] = { ...lastNode, next: id };
        }

        setNodes([...newNodes, newNode]);
    };

    const removeLast = () => {
        if (nodes.length <= 1) return;
        const newNodes = nodes.slice(0, -1);
        newNodes[newNodes.length - 1].next = null;
        setNodes(newNodes);
    };

    return (
        <div className="linked-list-container">
            <div className="viz-header">
                <h3>Singly Linked List</h3>
                <div className="controls">
                    <button onClick={addNode}>Add Node</button>
                    <button onClick={removeLast}>Remove Last</button>
                </div>
            </div>

            <div className="list-view">
                {nodes.map((node) => (
                    <div key={node.id} className="node-wrapper">
                        <div className="ll-node">
                            <div className="node-value">{node.value}</div>
                            <div className="node-ptr">{node.next ? "•" : "NULL"}</div>
                        </div>
                        {node.next !== null && (
                            <div className="pointer-arrow">
                                <span>→</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="algo-info">
                <p>Insertion at end: O(n) or O(1) if tail is tracked.</p>
            </div>
        </div>
    );
}
