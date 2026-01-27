import { VectorVisualizer } from './VectorVisualizer';
import { VectorAddition } from './VectorAddition';
import { CosineSimilarity } from './CosineSimilarity';
import { MatrixTransform } from './MatrixTransform';
import { NeuralLayerMatrix } from './NeuralLayerMatrix';
import { DistanceMetrics } from './DistanceMetrics';
import { GramSchmidt } from './GramSchmidt';
import { Eigenvectors } from './Eigenvectors';
import { PCAProjection } from './PCAProjection';
import { SortingVisualizer } from './SortingVisualizer';
import { LinkedListDiagram } from './LinkedListDiagram';

// Registry of visualization components
export const visualizationRegistry: Record<string, any> = {
    VectorVisualizer,
    VectorAddition,
    CosineSimilarity,
    MatrixTransform,
    NeuralLayerMatrix,
    DistanceMetrics,
    GramSchmidt,
    Eigenvectors,
    PCAProjection,
    SortingVisualizer,
    LinkedListDiagram,
};

export default visualizationRegistry;
