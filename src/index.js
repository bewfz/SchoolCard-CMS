const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/db');
const setAuthRoutes = require('./routes/authRoutes');
const setContentRoutes = require('./routes/contentRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MariaDB
db.connect();

// Set routes
setAuthRoutes(app);
setContentRoutes(app);

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});