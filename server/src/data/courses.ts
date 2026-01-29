import { Course } from '../types/index.js';

export const courses: Course[] = [
    {
        id: 'math-for-ai',
        title: 'Mathematics for AI',
        description: 'Master the mathematical foundations powering artificial intelligence',
        icon: '🧮',
        color: '#6366F1',
        modules: [
            {
                id: 'math-co1',
                courseId: 'math-for-ai',
                title: 'CO1: Linear Algebra Foundations',
                description: 'Vectors, matrices, and tensors for AI',
                order: 1,
                lessons: [
                    {
                        id: 'math-co1-l1',
                        moduleId: 'math-co1',
                        title: 'Vectors as Feature Representations',
                        order: 1,
                        content: [
                            { type: 'heading', data: { text: 'Vectors in AI', level: 1 } },
                            { type: 'paragraph', data: { text: 'Vectors are the fundamental building blocks of AI. They represent features of data, such as images, text, or sensor readings.' } },
                            { type: 'visualization', data: { visualizationType: 'VectorVisualizer', props: { vectors: [[3, 2], [1, 4]], labels: ['Feature A', 'Feature B'] } } }
                        ]
                    },
                    {
                        id: 'math-co1-l2',
                        moduleId: 'math-co1',
                        title: 'Vector Operations',
                        order: 2,
                        content: [
                            { type: 'heading', data: { text: 'Core Operations', level: 1 } },
                            { type: 'paragraph', data: { text: 'Addition, scalar multiplication, and dot products are essential for neural networks.' } },
                            { type: 'visualization', data: { visualizationType: 'VectorAddition', props: { v1: [2, 1], v2: [1, 3] } } }
                        ]
                    },
                    {
                        id: 'math-co1-l3',
                        moduleId: 'math-co1',
                        title: 'Matrices as Transformations',
                        order: 3,
                        content: [
                            { type: 'heading', data: { text: 'Matrix Transformations', level: 1 } },
                            { type: 'paragraph', data: { text: 'Matrices scale, rotate, and skew vector spaces. This is how neural networks transform data.' } },
                            { type: 'visualization', data: { visualizationType: 'MatrixTransform', props: { matrix: [[2, 0], [0, 1]], label: 'Scaling' } } }
                        ]
                    },
                    {
                        id: 'math-co1-l4',
                        moduleId: 'math-co1',
                        title: 'Tensors & Shapes',
                        order: 4,
                        content: [
                            { type: 'heading', data: { text: 'Beyond Matrices', level: 1 } },
                            { type: 'paragraph', data: { text: 'Tensors generalize scalars, vectors, and matrices to N dimensions.' } }
                        ]
                    }
                ]
            },
            {
                id: 'math-co2',
                courseId: 'math-for-ai',
                title: 'CO2: Geometry of Data',
                description: 'Distance, similarity, and dimensionality',
                order: 2,
                lessons: [
                    {
                        id: 'math-co2-l1',
                        moduleId: 'math-co2',
                        title: 'Rank & Subspaces',
                        order: 1,
                        content: [
                            { type: 'heading', data: { text: 'Linear Independence', level: 1 } },
                            { type: 'paragraph', data: { text: 'Understanding the true dimensionality of your data.' } }
                        ]
                    },
                    {
                        id: 'math-co2-l2',
                        moduleId: 'math-co2',
                        title: 'Distance Metrics',
                        order: 2,
                        content: [
                            { type: 'heading', data: { text: 'Measuring Similarity', level: 1 } },
                            { type: 'paragraph', data: { text: 'L1, L2, and Cosine Similarity are critical for clustering and classification.' } },
                            { type: 'visualization', data: { visualizationType: 'DistanceMetrics', props: { point1: [1, 4], point2: [4, 1] } } }
                        ]
                    },
                    {
                        id: 'math-co2-l3',
                        moduleId: 'math-co2',
                        title: 'SVD & PCA',
                        order: 3,
                        content: [
                            { type: 'heading', data: { text: 'Dimensionality Reduction', level: 1 } },
                            { type: 'paragraph', data: { text: 'Using eigenvalues and eigenvectors to find the most important features.' } },
                            { type: 'visualization', data: { visualizationType: 'PCAProjection', props: { points: [[1, 2], [2, 3], [3, 5]] } } }
                        ]
                    }
                ]
            },
            {
                id: 'math-co3',
                courseId: 'math-for-ai',
                title: 'CO3: Multivariable Calculus',
                description: 'Gradients and optimization landscapes',
                order: 3,
                lessons: [
                    {
                        id: 'math-co3-l1',
                        moduleId: 'math-co3',
                        title: 'Partial Derivatives & Gradients',
                        order: 1,
                        content: [
                            { type: 'heading', data: { text: 'The Gradient Vector', level: 1 } },
                            { type: 'paragraph', data: { text: 'The direction of steepest ascent. Crucial for training neural networks.' } }
                        ]
                    },
                    {
                        id: 'math-co3-l2',
                        moduleId: 'math-co3',
                        title: 'Jacobian & Hessian',
                        order: 2,
                        content: [
                            { type: 'heading', data: { text: 'Sensitivity & Curvature', level: 1 } },
                            { type: 'paragraph', data: { text: 'Understanding how changes in input affect output, and the curvature of the loss surface.' } }
                        ]
                    }
                ]
            },
            {
                id: 'math-co4',
                courseId: 'math-for-ai',
                title: 'CO4: Optimization & Learning',
                description: 'Minimizing loss functions',
                order: 4,
                lessons: [
                    {
                        id: 'math-co4-l1',
                        moduleId: 'math-co4',
                        title: 'Loss Functions',
                        order: 1,
                        content: [
                            { type: 'heading', data: { text: 'MSE & Cross-Entropy', level: 1 } },
                            { type: 'paragraph', data: { text: 'Quantifying the error of our model.' } }
                        ]
                    },
                    {
                        id: 'math-co4-l2',
                        moduleId: 'math-co4',
                        title: 'Gradient Descent',
                        order: 2,
                        content: [
                            { type: 'heading', data: { text: 'Walking Down the Mountain', level: 1 } },
                            { type: 'paragraph', data: { text: 'Iteratively updating weights to minimize loss.' } }
                        ]
                    },
                    {
                        id: 'math-co4-l3',
                        moduleId: 'math-co4',
                        title: 'Optimizers',
                        order: 3,
                        content: [
                            { type: 'heading', data: { text: 'Beyond Vanilla GD', level: 1 } },
                            { type: 'paragraph', data: { text: 'Momentum, Nesterov, and Adam help converge faster and avoid local minima.' } }
                        ]
                    }
                ]
            },
            {
                id: 'math-co5',
                courseId: 'math-for-ai',
                title: 'CO5: Advanced AI Mathematics',
                description: 'PCA, Convolution, and Attention',
                order: 5,
                lessons: [
                    {
                        id: 'math-co5-l1',
                        moduleId: 'math-co5',
                        title: 'Convolution',
                        order: 1,
                        content: [
                            { type: 'heading', data: { text: 'Sliding Dot Products', level: 1 } },
                            { type: 'paragraph', data: { text: 'The core operation of CNNs for image processing.' } }
                        ]
                    },
                    {
                        id: 'math-co5-l2',
                        moduleId: 'math-co5',
                        title: 'Attention Mechanisms',
                        order: 2,
                        content: [
                            { type: 'heading', data: { text: 'Q, K, V', level: 1 } },
                            { type: 'paragraph', data: { text: 'The mathematical basis of Transformers and LLMs.' } }
                        ]
                    }
                ]
            },
            {
                id: 'math-co6',
                courseId: 'math-for-ai',
                title: 'CO6: Mathematical Thinking in AI',
                description: 'Putting it all together',
                order: 6,
                lessons: [
                    {
                        id: 'math-co6-l1',
                        moduleId: 'math-co6',
                        title: 'Backpropagation',
                        order: 1,
                        content: [
                            { type: 'heading', data: { text: 'The Forward & Backward Pass', level: 1 } },
                            { type: 'paragraph', data: { text: 'Computing gradients efficiently using the Chain Rule.' } }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'dsa-java',
        title: 'Data Structures & Algorithms – I',
        description: 'Think like a computer scientist',
        icon: '💻',
        color: '#10B981',
        modules: [
            {
                id: 'dsa-m1',
                courseId: 'dsa-java',
                title: 'Searching & Sorting',
                description: 'Algorithms for organizing and finding data',
                order: 1,
                lessons: [
                    {
                        id: 'dsa-m1-l1',
                        moduleId: 'dsa-m1',
                        title: 'Linear & Binary Search',
                        order: 1,
                        content: [
                            { type: 'heading', data: { text: 'Searching Algorithms', level: 1 } },
                            { type: 'paragraph', data: { text: 'Finding elements in sorted and unsorted collections.' } }
                        ]
                    },
                    {
                        id: 'dsa-m1-l2',
                        moduleId: 'dsa-m1',
                        title: 'Sorting Algorithms',
                        order: 2,
                        content: [
                            { type: 'heading', data: { text: 'Sorting', level: 1 } },
                            { type: 'paragraph', data: { text: 'Bubble, Insertion, Selection, Merge, and Quick Sort.' } },
                            { type: 'visualization', data: { visualizationType: 'SortingVisualizer', props: {} } }
                        ]
                    }
                ]
            },
            {
                id: 'dsa-m2',
                courseId: 'dsa-java',
                title: 'Lists',
                description: 'Sequences and Linked Structures',
                order: 2,
                lessons: [
                    {
                        id: 'dsa-m2-l1',
                        moduleId: 'dsa-m2',
                        title: 'List ADT & Implementation',
                        order: 1,
                        content: [
                            { type: 'heading', data: { text: 'Abstract Data Type', level: 1 } },
                            { type: 'paragraph', data: { text: 'Defining the behavior of a list independent of implementation.' } }
                        ]
                    },
                    {
                        id: 'dsa-m2-l2',
                        moduleId: 'dsa-m2',
                        title: 'Linked Lists',
                        order: 2,
                        content: [
                            { type: 'heading', data: { text: 'Nodes and Pointers', level: 1 } },
                            { type: 'paragraph', data: { text: 'Singly, Doubly, and Circular linked lists.' } },
                            { type: 'visualization', data: { visualizationType: 'LinkedListDiagram', props: {} } }
                        ]
                    }
                ]
            },
            {
                id: 'dsa-m3',
                courseId: 'dsa-java',
                title: 'Stacks & Queues',
                description: 'LIFO and FIFO structures',
                order: 3,
                lessons: [
                    {
                        id: 'dsa-m3-l1',
                        moduleId: 'dsa-m3',
                        title: 'Stacks',
                        order: 1,
                        content: [
                            { type: 'heading', data: { text: 'Last In, First Out', level: 1 } },
                            { type: 'paragraph', data: { text: 'Applications in expression evaluation and function calls.' } }
                        ]
                    },
                    {
                        id: 'dsa-m3-l2',
                        moduleId: 'dsa-m3',
                        title: 'Queues',
                        order: 2,
                        content: [
                            { type: 'heading', data: { text: 'First In, First Out', level: 1 } },
                            { type: 'paragraph', data: { text: 'Circular queues, Deques, and applications in scheduling.' } }
                        ]
                    }
                ]
            },
            {
                id: 'dsa-m4',
                courseId: 'dsa-java',
                title: 'Hashing & Trees',
                description: 'Eficient access and hierarchical data',
                order: 4,
                lessons: [
                    {
                        id: 'dsa-m4-l1',
                        moduleId: 'dsa-m4',
                        title: 'Hashing',
                        order: 1,
                        content: [
                            { type: 'heading', data: { text: 'Hash Tables', level: 1 } },
                            { type: 'paragraph', data: { text: 'Hash functions, collision resolution (Chaining, Probing).' } }
                        ]
                    },
                    {
                        id: 'dsa-m4-l2',
                        moduleId: 'dsa-m4',
                        title: 'Priority Queues & Heaps',
                        order: 2,
                        content: [
                            { type: 'heading', data: { text: 'Binary Heaps', level: 1 } },
                            { type: 'paragraph', data: { text: 'Efficient implementation of Priority Queues.' } }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'web-dev',
        title: 'Fundamentals of Web Development',
        description: 'Build modern web applications from scratch',
        icon: '🌐',
        color: '#F59E0B',
        modules: [
            {
                id: 'web-co1',
                courseId: 'web-dev',
                title: 'CO1: Internet & HTML/CSS',
                description: 'The foundation of the web',
                order: 1,
                lessons: [
                    {
                        id: 'web-co1-l1',
                        moduleId: 'web-co1',
                        title: 'Internet Basics',
                        order: 1,
                        content: [
                            { type: 'heading', data: { text: 'How the Web Works', level: 1 } },
                            { type: 'paragraph', data: { text: 'HTTP/HTTPS, Client-Server model, and DNS.' } }
                        ]
                    },
                    {
                        id: 'web-co1-l2',
                        moduleId: 'web-co1',
                        title: 'HTML Structure',
                        order: 2,
                        content: [
                            { type: 'heading', data: { text: 'Semantic HTML', level: 1 } },
                            { type: 'paragraph', data: { text: 'Using the right tags for the right job.' } }
                        ]
                    },
                    {
                        id: 'web-co1-l3',
                        moduleId: 'web-co1',
                        title: 'CSS Fundamentals',
                        order: 3,
                        content: [
                            { type: 'heading', data: { text: 'Styling', level: 1 } },
                            { type: 'paragraph', data: { text: 'Selectors, Box Model, and Typography.' } }
                        ]
                    }
                ]
            },
            {
                id: 'web-co2',
                courseId: 'web-dev',
                title: 'CO2: Forms, Semantics & Layouts',
                description: 'Interactive and responsive design',
                order: 2,
                lessons: [
                    {
                        id: 'web-co2-l1',
                        moduleId: 'web-co2',
                        title: 'Forms & Validation',
                        order: 1,
                        content: [
                            { type: 'heading', data: { text: 'Collecting User Input', level: 1 } },
                            { type: 'paragraph', data: { text: 'Input types, labels, and client-side validation.' } }
                        ]
                    },
                    {
                        id: 'web-co2-l2',
                        moduleId: 'web-co2',
                        title: 'Responsive Design',
                        order: 2,
                        content: [
                            { type: 'heading', data: { text: 'Flexbox & Grid', level: 1 } },
                            { type: 'paragraph', data: { text: 'Creating layouts that adapt to any screen size.' } }
                        ]
                    }
                ]
            },
            {
                id: 'web-co3',
                courseId: 'web-dev',
                title: 'CO3: JavaScript Fundamentals',
                description: 'Programming logic for the web',
                order: 3,
                lessons: [
                    {
                        id: 'web-co3-l1',
                        moduleId: 'web-co3',
                        title: 'JS Basics',
                        order: 1,
                        content: [
                            { type: 'heading', data: { text: 'Variables & Functions', level: 1 } },
                            { type: 'paragraph', data: { text: 'ES6+ syntax, arrow functions, and scopes.' } }
                        ]
                    },
                    {
                        id: 'web-co3-l2',
                        moduleId: 'web-co3',
                        title: 'Objects & Arrays',
                        order: 2,
                        content: [
                            { type: 'heading', data: { text: 'Data Structures', level: 1 } },
                            { type: 'paragraph', data: { text: 'Working with JSON and collections.' } }
                        ]
                    }
                ]
            },
            {
                id: 'web-co4',
                courseId: 'web-dev',
                title: 'CO4: DOM & Async JavaScript',
                description: 'Interactivity and external data',
                order: 4,
                lessons: [
                    {
                        id: 'web-co4-l1',
                        moduleId: 'web-co4',
                        title: 'DOM Manipulation',
                        order: 1,
                        content: [
                            { type: 'heading', data: { text: 'The Document Object Model', level: 1 } },
                            { type: 'paragraph', data: { text: 'Selecting and modifying page elements dynamically.' } }
                        ]
                    },
                    {
                        id: 'web-co4-l2',
                        moduleId: 'web-co4',
                        title: 'Async Programming',
                        order: 2,
                        content: [
                            { type: 'heading', data: { text: 'Promises & Async/Await', level: 1 } },
                            { type: 'paragraph', data: { text: 'Handling API calls and asynchronous operations.' } }
                        ]
                    }
                ]
            },
            {
                id: 'web-co5',
                courseId: 'web-dev',
                title: 'CO5: Advanced Web & Deployment',
                description: 'Professional practices',
                order: 5,
                lessons: [
                    {
                        id: 'web-co5-l1',
                        moduleId: 'web-co5',
                        title: 'Performance & SEO',
                        order: 1,
                        content: [
                            { type: 'heading', data: { text: 'Optimization', level: 1 } },
                            { type: 'paragraph', data: { text: 'Core Web Vitals and Search Engine Optimization.' } }
                        ]
                    },
                    {
                        id: 'web-co5-l2',
                        moduleId: 'web-co5',
                        title: 'Deployment',
                        order: 2,
                        content: [
                            { type: 'heading', data: { text: 'Going Live', level: 1 } },
                            { type: 'paragraph', data: { text: 'Hosting, CI/CD, and production best practices.' } }
                        ]
                    }
                ]
            }
        ]
    }
];
