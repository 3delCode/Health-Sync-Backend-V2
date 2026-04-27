const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

// Import routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const medicationRoutes = require('./routes/medicationRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const documentRoutes = require('./routes/documentRoutes');

// Import middleware
const { errorHandler } = require('./middleware/errorMiddleware');
const { rateLimiter } = require('./middleware/rateLimiter');

const app = express();

// Security middleware
app.use(cors({
    origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:3000'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" }
}));

app.use(compression());

// Logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Rate limiting
app.use(rateLimiter);

// Body parsing
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Static files
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Request logging
app.use((req, res, next) => {
    console.log(`📝 ${req.method} ${req.originalUrl}`);
    next();
});

// Health check
app.get('/api/health', (req, res) => {
    res.json({
        success: true,
        status: 'OK',
        message: 'Health Sync API is running',
        version: '1.0.0',
        environment: process.env.NODE_ENV,
        timestamp: new Date().toISOString()
    });
});

// API info
app.get('/api', (req, res) => {
    res.json({
        success: true,
        name: 'Health Sync API',
        version: '1.0.0',
        description: 'Health Management System API',
        endpoints: {
            auth: '/api/auth',
            users: '/api/users',
            medications: '/api/medications',
            appointments: '/api/appointments',
            documents: '/api/documents'
        }
    });
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/medications', medicationRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/documents', documentRoutes);

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        statusCode: 404,
        message: `Route ${req.method} ${req.originalUrl} not found`,
        timestamp: new Date().toISOString()
    });
});

// Error handler
app.use(errorHandler);

module.exports = app;