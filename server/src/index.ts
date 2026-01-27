import express from 'express';
import cors from 'cors';
import courseRoutes from './routes/courses.js';
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the React app
const clientDistPath = path.join(__dirname, '../../client/dist');
app.use(express.static(clientDistPath));

// Routes
app.use('/api/courses', courseRoutes);

// Health check
app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// For any other request, send back the index.html file
app.get('*', (_req, res) => {
    res.sendFile(path.join(clientDistPath, 'index.html'));
});

// Error handling
app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
