const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5000;

// Initial express
const app = express();

// Inable cors requests
app.use(cors());

// Connect database
connectDB();

// Init middleware - enable get data from req.body
app.use(express.json({ extended: false }));

// Define routes
app.use('/api/insurance', require('./routes/api/Insurance'));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
