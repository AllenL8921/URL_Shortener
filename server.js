// server.js
import express from 'express';
import mongoose from 'mongoose';

// Import routers
import shortUrlRouter from './controllers/shortUrlController.js';

const app = express();

// Connect to DB
mongoose
  .connect('mongodb://localhost/urlShortener', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Use imported routes
app.use('/', shortUrlRouter);

// Set up EJS as the view engine
app.set('view engine', 'ejs');

// Middleware for parsing URL-encoded data
app.use(express.urlencoded({ extended: false }));

// Start the server
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`);
});
