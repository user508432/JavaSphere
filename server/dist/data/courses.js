export const courses = [
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
                            { type: 'heading', data: { text: 'Vectors as Feature Representations', level: 1 } },
                            { type: 'paragraph', data: { text: 'In AI and machine learning, vectors are the fundamental data structure for representing information. Every image, word, or sensor reading can be encoded as a vector—a list of numbers that captures essential features.' } },
                            { type: 'note', data: { text: 'A vector is simply an ordered list of numbers. In AI, each number represents a feature or dimension of the data.' } },
                            { type: 'heading', data: { text: 'Real-World Examples', level: 2 } },
                            {
                                type: 'list', data: {
                                    items: [
                                        'Images: Each pixel RGB value becomes a component. A 28×28 grayscale image = 784-dimensional vector',
                                        'Word Embeddings: Words like "king" are represented as 300-dimensional vectors capturing semantic meaning',
                                        'Sensor Data: Temperature, humidity, pressure readings form a feature vector for weather prediction'
                                    ]
                                }
                            },
                            { type: 'visualization', data: { visualizationType: 'VectorVisualizer', props: { vectors: [[3, 2], [1, 4]], labels: ['Feature A', 'Feature B'] } } },
                            { type: 'heading', data: { text: 'Mathematical Notation', level: 2 } },
                            { type: 'paragraph', data: { text: 'A vector v with n components is written as:' } },
                            { type: 'code', data: { language: 'text', code: 'v = [v₁, v₂, v₃, ..., vₙ]\n\nExample: Image pixel features\nv = [0.2, 0.8, 0.1, 0.5, ...]' } }
                        ]
                    },
                    {
                        id: 'math-co1-l2',
                        moduleId: 'math-co1',
                        title: 'Vector Operations',
                        order: 2,
                        content: [
                            { type: 'heading', data: { text: 'Vector Operations', level: 1 } },
                            { type: 'paragraph', data: { text: 'Vector operations are the building blocks of neural network computations. Understanding addition, scaling, and element-wise operations is essential.' } },
                            { type: 'heading', data: { text: 'Vector Addition', level: 2 } },
                            { type: 'paragraph', data: { text: 'Adding vectors combines features from different sources. In neural networks, this happens when we add bias terms to weighted inputs.' } },
                            { type: 'code', data: { language: 'text', code: 'a = [1, 2, 3]\nb = [4, 5, 6]\na + b = [5, 7, 9]  // Element-wise addition' } },
                            { type: 'visualization', data: { visualizationType: 'VectorAddition', props: { v1: [2, 1], v2: [1, 3] } } },
                            { type: 'heading', data: { text: 'Scalar Multiplication', level: 2 } },
                            { type: 'paragraph', data: { text: 'Multiplying a vector by a scalar scales its magnitude. This is how weights amplify or diminish signals in neural networks.' } },
                            { type: 'code', data: { language: 'text', code: 'v = [1, 2, 3]\n2 × v = [2, 4, 6]  // Each component scaled' } }
                        ]
                    },
                    {
                        id: 'math-co1-l3',
                        moduleId: 'math-co1',
                        title: 'Dot Product & Similarity',
                        order: 3,
                        content: [
                            { type: 'heading', data: { text: 'Dot Product as Similarity', level: 1 } },
                            { type: 'paragraph', data: { text: 'The dot product is perhaps the most important operation in AI. It measures how similar two vectors are and forms the core computation in neural networks.' } },
                            { type: 'code', data: { language: 'text', code: 'a · b = a₁b₁ + a₂b₂ + ... + aₙbₙ\n\nExample:\na = [1, 2, 3]\nb = [4, 5, 6]\na · b = 1×4 + 2×5 + 3×6 = 32' } },
                            { type: 'heading', data: { text: 'Cosine Similarity', level: 2 } },
                            { type: 'paragraph', data: { text: 'Cosine similarity normalizes the dot product by vector magnitudes, giving a value between -1 and 1. This is used extensively in NLP for comparing word embeddings.' } },
                            { type: 'visualization', data: { visualizationType: 'CosineSimilarity', props: { v1: [3, 1], v2: [2, 3] } } },
                            { type: 'code', data: { language: 'text', code: 'cos(θ) = (a · b) / (||a|| × ||b||)\n\nwhere ||a|| = sqrt(a₁² + a₂² + ... + aₙ²)' } },
                            { type: 'note', data: { text: 'When vectors point in the same direction, cosine similarity = 1. Perpendicular vectors = 0. Opposite = -1.' } }
                        ]
                    },
                    {
                        id: 'math-co1-l4',
                        moduleId: 'math-co1',
                        title: 'Matrices as Transformations',
                        order: 4,
                        content: [
                            { type: 'heading', data: { text: 'Matrices as Transformations', level: 1 } },
                            { type: 'paragraph', data: { text: 'A matrix is a rectangular array of numbers that can transform vectors. In neural networks, weight matrices transform input features into output features.' } },
                            { type: 'visualization', data: { visualizationType: 'MatrixTransform', props: { matrix: [[2, 0], [0, 1]], label: 'Horizontal Stretch' } } },
                            { type: 'heading', data: { text: 'Common Transformations', level: 2 } },
                            {
                                type: 'list', data: {
                                    items: [
                                        'Rotation: Rotates vectors around the origin',
                                        'Scaling: Stretches or shrinks along axes',
                                        'Shearing: Slants the space along an axis',
                                        'Projection: Collapses dimensions (used in dimensionality reduction)'
                                    ]
                                }
                            },
                            { type: 'code', data: { language: 'text', code: 'Rotation by θ:\n[cos(θ)  -sin(θ)]   [x]   [x·cos(θ) - y·sin(θ)]\n[sin(θ)   cos(θ)] × [y] = [x·sin(θ) + y·cos(θ)]' } }
                        ]
                    },
                    {
                        id: 'math-co1-l5',
                        moduleId: 'math-co1',
                        title: 'Matrix Multiplication as Neural Layers',
                        order: 5,
                        content: [
                            { type: 'heading', data: { text: 'Matrix Multiplication as Neural Layers', level: 1 } },
                            { type: 'paragraph', data: { text: 'Every layer in a neural network performs matrix multiplication. The weight matrix transforms the input vector into an output vector.' } },
                            { type: 'code', data: { language: 'text', code: 'Input: x = [x₁, x₂, x₃] (3 features)\nWeight Matrix W (2×3):\n[w₁₁ w₁₂ w₁₃]\n[w₂₁ w₂₂ w₂₃]\n\nOutput: y = Wx (2 features)\ny₁ = w₁₁x₁ + w₁₂x₂ + w₁₃x₃\ny₂ = w₂₁x₁ + w₂₂x₂ + w₂₃x₃' } },
                            { type: 'note', data: { text: 'A neural network is just a sequence of matrix multiplications with non-linear activations in between!' } },
                            { type: 'visualization', data: { visualizationType: 'NeuralLayerMatrix', props: { inputSize: 3, outputSize: 2 } } }
                        ]
                    },
                    {
                        id: 'math-co1-l6',
                        moduleId: 'math-co1',
                        title: 'Tensors and AI Frameworks',
                        order: 6,
                        content: [
                            { type: 'heading', data: { text: 'Tensors and Tensor Shapes', level: 1 } },
                            { type: 'paragraph', data: { text: 'Tensors are generalizations of vectors and matrices to higher dimensions. AI frameworks like PyTorch and TensorFlow are named after this fundamental data structure.' } },
                            {
                                type: 'list', data: {
                                    items: [
                                        'Scalar: 0-dimensional tensor (single number)',
                                        'Vector: 1-dimensional tensor (list of numbers)',
                                        'Matrix: 2-dimensional tensor (grid of numbers)',
                                        '3D Tensor: Stack of matrices (e.g., color image with RGB channels)',
                                        '4D Tensor: Batch of 3D tensors (batch of images)'
                                    ]
                                }
                            },
                            { type: 'code', data: { language: 'python', code: '# Image batch tensor shape\n# (batch_size, channels, height, width)\nimages.shape = (32, 3, 224, 224)\n\n# 32 images, 3 color channels (RGB)\n# Each image is 224×224 pixels' } },
                            { type: 'note', data: { text: 'Understanding tensor shapes is crucial for debugging neural networks. Shape mismatches are the most common error!' } }
                        ]
                    }
                ]
            },
            {
                id: 'math-co2',
                courseId: 'math-for-ai',
                title: 'CO2: Vector Spaces & Dimensionality',
                description: 'Eigenvalues, PCA, and reducing dimensions',
                order: 2,
                lessons: [
                    {
                        id: 'math-co2-l1',
                        moduleId: 'math-co2',
                        title: 'Rank and Linear Independence',
                        order: 1,
                        content: [
                            { type: 'heading', data: { text: 'Rank and Linear Independence', level: 1 } },
                            { type: 'paragraph', data: { text: 'Linear independence tells us how much unique information each vector contributes. In AI, redundant features waste computation and can hurt model performance.' } },
                            { type: 'heading', data: { text: 'Linear Independence', level: 2 } },
                            { type: 'paragraph', data: { text: 'Vectors are linearly independent if no vector can be expressed as a combination of the others. Think of it as each vector adding a new "direction" to the space.' } },
                            { type: 'code', data: { language: 'text', code: 'Independent: [1,0], [0,1]  ← Different directions\nDependent: [1,2], [2,4]    ← Same direction (one is 2× the other)' } },
                            { type: 'heading', data: { text: 'Matrix Rank', level: 2 } },
                            { type: 'paragraph', data: { text: 'The rank of a matrix is the number of linearly independent rows (or columns). It tells us the true dimensionality of our data.' } },
                            { type: 'note', data: { text: 'A 1000-dimensional dataset might have rank 50, meaning it really only has 50 degrees of freedom. PCA exploits this!' } }
                        ]
                    },
                    {
                        id: 'math-co2-l2',
                        moduleId: 'math-co2',
                        title: 'Orthonormal Basis & Gram-Schmidt',
                        order: 2,
                        content: [
                            { type: 'heading', data: { text: 'Orthonormal Basis', level: 1 } },
                            { type: 'paragraph', data: { text: 'An orthonormal basis is a set of unit vectors that are all perpendicular to each other. This makes computations simpler and more stable.' } },
                            {
                                type: 'list', data: {
                                    items: [
                                        'Orthogonal: Vectors are perpendicular (dot product = 0)',
                                        'Normal: Each vector has length 1',
                                        'Basis: Vectors span the entire space'
                                    ]
                                }
                            },
                            { type: 'heading', data: { text: 'Gram-Schmidt Process', level: 2 } },
                            { type: 'paragraph', data: { text: 'Gram-Schmidt converts any set of independent vectors into an orthonormal basis by iteratively subtracting projections and normalizing.' } },
                            { type: 'visualization', data: { visualizationType: 'GramSchmidt', props: { vectors: [[2, 1], [1, 2]] } } },
                            { type: 'code', data: { language: 'text', code: 'Step 1: u₁ = v₁ / ||v₁||  (normalize first vector)\nStep 2: u₂ = v₂ - (v₂·u₁)u₁  (subtract projection)\nStep 3: u₂ = u₂ / ||u₂||  (normalize)' } }
                        ]
                    },
                    {
                        id: 'math-co2-l3',
                        moduleId: 'math-co2',
                        title: 'Distance Metrics: L1, L2, Cosine',
                        order: 3,
                        content: [
                            { type: 'heading', data: { text: 'Distance Metrics', level: 1 } },
                            { type: 'paragraph', data: { text: 'Different distance metrics capture different notions of similarity. Choosing the right metric is crucial for clustering, classification, and retrieval tasks.' } },
                            { type: 'heading', data: { text: 'L1 Distance (Manhattan)', level: 2 } },
                            { type: 'code', data: { language: 'text', code: 'd₁(a,b) = |a₁-b₁| + |a₂-b₂| + ... + |aₙ-bₙ|\n\n// Like walking on a city grid' } },
                            { type: 'heading', data: { text: 'L2 Distance (Euclidean)', level: 2 } },
                            { type: 'code', data: { language: 'text', code: 'd₂(a,b) = √[(a₁-b₁)² + (a₂-b₂)² + ... + (aₙ-bₙ)²]\n\n// Straight-line distance' } },
                            { type: 'heading', data: { text: 'Cosine Distance', level: 2 } },
                            { type: 'code', data: { language: 'text', code: 'cos_dist(a,b) = 1 - cos_similarity(a,b)\n\n// Measures angle, ignores magnitude\n// Ideal for text where document length varies' } },
                            { type: 'visualization', data: { visualizationType: 'DistanceMetrics', props: { point1: [1, 4], point2: [4, 1] } } }
                        ]
                    },
                    {
                        id: 'math-co2-l4',
                        moduleId: 'math-co2',
                        title: 'Eigenvalues & Eigenvectors',
                        order: 4,
                        content: [
                            { type: 'heading', data: { text: 'Eigenvalues & Eigenvectors', level: 1 } },
                            { type: 'paragraph', data: { text: 'Eigenvectors are special directions that a matrix only scales (not rotates). The eigenvalue tells us the scaling factor. These are the directions of maximum variance in data.' } },
                            { type: 'code', data: { language: 'text', code: 'Definition: Av = λv\n\nA = transformation matrix\nv = eigenvector (direction preserved)\nλ = eigenvalue (scaling factor)' } },
                            { type: 'visualization', data: { visualizationType: 'Eigenvectors', props: { matrix: [[2, 1], [1, 2]] } } },
                            { type: 'note', data: { text: 'In PCA, eigenvectors of the covariance matrix point along the directions of maximum data variance. The eigenvalue tells us how much variance is along each direction.' } }
                        ]
                    },
                    {
                        id: 'math-co2-l5',
                        moduleId: 'math-co2',
                        title: 'PCA & SVD Intuition',
                        order: 5,
                        content: [
                            { type: 'heading', data: { text: 'Principal Component Analysis (PCA)', level: 1 } },
                            { type: 'paragraph', data: { text: 'PCA finds the directions (principal components) that capture the most variance in data. We can then project data onto fewer dimensions while keeping most information.' } },
                            { type: 'visualization', data: { visualizationType: 'PCAProjection', props: { points: [[1, 2], [2, 3], [3, 5], [4, 4], [5, 6]] } } },
                            { type: 'heading', data: { text: 'Steps of PCA', level: 2 } },
                            {
                                type: 'list', data: {
                                    items: [
                                        '1. Center the data (subtract mean)',
                                        '2. Compute covariance matrix',
                                        '3. Find eigenvectors and eigenvalues',
                                        '4. Sort by eigenvalue (largest first)',
                                        '5. Project onto top k eigenvectors'
                                    ]
                                }
                            },
                            { type: 'heading', data: { text: 'Singular Value Decomposition (SVD)', level: 2 } },
                            { type: 'paragraph', data: { text: 'SVD decomposes any matrix into three parts: A = UΣVᵀ. It generalizes eigendecomposition and works for non-square matrices.' } },
                            { type: 'code', data: { language: 'text', code: 'A = UΣVᵀ\n\nU = left singular vectors (row space)\nΣ = singular values (importance of each component)\nV = right singular vectors (column space)' } }
                        ]
                    },
                    {
                        id: 'math-co2-l6',
                        moduleId: 'math-co2',
                        title: 'Applications: Recommenders & NLP',
                        order: 6,
                        content: [
                            { type: 'heading', data: { text: 'Applications of Dimensionality Reduction', level: 1 } },
                            { type: 'heading', data: { text: 'Recommender Systems', level: 2 } },
                            { type: 'paragraph', data: { text: 'Netflix and Amazon use matrix factorization (similar to SVD) to find latent features in user-item interactions. Each user and item gets a low-dimensional embedding.' } },
                            { type: 'code', data: { language: 'text', code: 'User-Item Rating Matrix (sparse):\n         Movie1  Movie2  Movie3\nUser1      5       ?       3\nUser2      ?       4       ?\nUser3      4       5       ?\n\nFactorized into:\nUser embeddings (k dimensions)\nItem embeddings (k dimensions)\n\nPrediction: user_embed · item_embed' } },
                            { type: 'heading', data: { text: 'NLP: Latent Semantic Analysis', level: 2 } },
                            { type: 'paragraph', data: { text: 'LSA applies SVD to term-document matrices, revealing semantic relationships between words and documents in a lower-dimensional space.' } }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'dsa-java',
        title: 'DSA with Java',
        description: 'Master Data Structures and Algorithms using Java',
        icon: '☕',
        color: '#10B981',
        modules: [
            {
                id: 'dsa-unit1',
                courseId: 'dsa-java',
                title: 'Unit 1: Arrays & Sorting',
                description: 'Time complexity, arrays, and sorting algorithms',
                order: 1,
                lessons: [
                    {
                        id: 'dsa-u1-l1',
                        moduleId: 'dsa-unit1',
                        title: 'Time & Space Complexity',
                        order: 1,
                        content: [
                            { type: 'heading', data: { text: 'Big O Notation', level: 1 } },
                            { type: 'paragraph', data: { text: 'We use Big O to describe value performance relative to input size (n).' } },
                            { type: 'complexity', data: { time: 'O(n)', space: 'O(1)', text: 'Linear Scan' } }
                        ]
                    },
                    {
                        id: 'dsa-u1-l2',
                        moduleId: 'dsa-unit1',
                        title: 'Bubble Sort Visualization',
                        order: 2,
                        content: [
                            { type: 'heading', data: { text: 'Bubble Sort Algorithm', level: 1 } },
                            { type: 'paragraph', data: { text: 'A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.' } },
                            { type: 'visualization', data: { visualizationType: 'SortingVisualizer', props: {} } },
                            { type: 'code', data: { language: 'java', code: 'void bubbleSort(int arr[]) {\n    int n = arr.length;\n    for (int i = 0; i < n-1; i++)\n        for (int j = 0; j < n-i-1; j++)\n            if (arr[j] > arr[j+1])\n                // swap arr[j+1] and arr[j]\n}' } }
                        ]
                    }
                ]
            },
            {
                id: 'dsa-unit2',
                courseId: 'dsa-java',
                title: 'Unit 2: Linked Lists',
                description: 'Singly and Doubly Linked Lists',
                order: 2,
                lessons: [
                    {
                        id: 'dsa-u2-l1',
                        moduleId: 'dsa-unit2',
                        title: 'Anatomy of a Node',
                        order: 1,
                        content: [
                            { type: 'heading', data: { text: 'Node Structure', level: 1 } },
                            { type: 'paragraph', data: { text: 'A node contains data and a reference (pointer) to the next node.' } },
                            { type: 'visualization', data: { visualizationType: 'LinkedListDiagram', props: {} } }
                        ]
                    }
                ]
            },
            {
                id: 'dsa-unit3',
                courseId: 'dsa-java',
                title: 'Unit 3: Stacks & Queues',
                description: 'LIFO and FIFO data structures',
                order: 3,
                lessons: [
                    {
                        id: 'dsa-u3-l1',
                        moduleId: 'dsa-unit3',
                        title: 'Stack Implementation',
                        order: 1,
                        content: [
                            { type: 'heading', data: { text: 'LIFO Principle', level: 1 } },
                            { type: 'paragraph', data: { text: 'Last In, First Out. Like a stack of plates.' } },
                            { type: 'code', data: { language: 'java', code: 'Stack<Integer> stack = new Stack<>();\nstack.push(1);\nstack.push(2);\nSystem.out.println(stack.pop()); // 2' } }
                        ]
                    }
                ]
            },
            {
                id: 'dsa-unit4',
                courseId: 'dsa-java',
                title: 'Unit 4: Trees & Graphs',
                description: 'Hierarchical and relational structures',
                order: 4,
                lessons: [
                    {
                        id: 'dsa-u4-l1',
                        moduleId: 'dsa-unit4',
                        title: 'Binary Search Trees',
                        order: 1,
                        content: [
                            { type: 'heading', data: { text: 'BST Properties', level: 1 } },
                            { type: 'paragraph', data: { text: 'Left child < Parent < Right child. Allows O(log n) search.' } }
                        ]
                    }
                ]
            },
            {
                id: 'dsa-unit5',
                courseId: 'dsa-java',
                title: 'Unit 5: Dynamic Programming',
                description: 'Optimization through subproblems',
                order: 5,
                lessons: [
                    {
                        id: 'dsa-u5-l1',
                        moduleId: 'dsa-unit5',
                        title: 'Fibonacci Sequence',
                        order: 1,
                        content: [
                            { type: 'heading', data: { text: 'Memoization', level: 1 } },
                            { type: 'paragraph', data: { text: 'Storing results of expensive function calls.' } }
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
                title: 'CO1: HTML & CSS',
                description: 'Structure and styling of the web',
                order: 1,
                lessons: [
                    {
                        id: 'web-co1-l1',
                        moduleId: 'web-co1',
                        title: 'Semantic HTML',
                        order: 1,
                        content: [
                            { type: 'heading', data: { text: 'Why Semantics Matter', level: 1 } },
                            { type: 'paragraph', data: { text: 'Using tags like <header>, <article>, and <footer> helps accessibility and SEO.' } },
                            { type: 'code', data: { language: 'html', code: '<article>\n  <h1>My Blog Post</h1>\n  <p>Content goes here...</p>\n</article>' } }
                        ]
                    }
                ]
            },
            {
                id: 'web-co2',
                courseId: 'web-dev',
                title: 'CO2: JavaScript Essentials',
                description: 'Interactivity and logic',
                order: 2,
                lessons: [
                    {
                        id: 'web-co2-l1',
                        moduleId: 'web-co2',
                        title: 'ES6+ Features',
                        order: 1,
                        content: [
                            { type: 'heading', data: { text: 'Modern JS', level: 1 } },
                            { type: 'paragraph', data: { text: 'Arrow functions, destructuring, and async/await changed how we write JS.' } },
                            { type: 'code', data: { language: 'javascript', code: 'const fetchData = async () => {\n  const { data } = await api.get("/users");\n  return data;\n};' } }
                        ]
                    }
                ]
            },
            {
                id: 'web-co3',
                courseId: 'web-dev',
                title: 'CO3: React Fundamentals',
                description: 'Component-based architecture',
                order: 3,
                lessons: [
                    {
                        id: 'web-co3-l1',
                        moduleId: 'web-co3',
                        title: 'Components & Props',
                        order: 1,
                        content: [
                            { type: 'heading', data: { text: 'Thinking in React', level: 1 } },
                            { type: 'paragraph', data: { text: 'UI is split into independent, reusable pieces called components.' } }
                        ]
                    }
                ]
            },
            {
                id: 'web-co4',
                courseId: 'web-dev',
                title: 'CO4: Backend Basics',
                description: 'Servers, APIs, and Databases',
                order: 4,
                lessons: [
                    {
                        id: 'web-co4-l1',
                        moduleId: 'web-co4',
                        title: 'REST APIs',
                        order: 1,
                        content: [
                            { type: 'heading', data: { text: 'Representational State Transfer', level: 1 } },
                            { type: 'paragraph', data: { text: 'Standard architectural style for APIs.' } }
                        ]
                    }
                ]
            },
            {
                id: 'web-co5',
                courseId: 'web-dev',
                title: 'CO5: Deployment & DevOps',
                description: 'Going live',
                order: 5,
                lessons: [
                    {
                        id: 'web-co5-l1',
                        moduleId: 'web-co5',
                        title: 'CI/CD Pipelines',
                        order: 1,
                        content: [
                            { type: 'heading', data: { text: 'Automating Delivery', level: 1 } },
                            { type: 'paragraph', data: { text: 'Continuous Integration and Deployment ensure code quality and speed.' } }
                        ]
                    }
                ]
            }
        ]
    }
];
//# sourceMappingURL=courses.js.map