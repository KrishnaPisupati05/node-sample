const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Optional: API route example (if your app has an API)
app.get('/api', (req, res) => {
    res.json({ message: 'Hello from the Node.js API!' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
