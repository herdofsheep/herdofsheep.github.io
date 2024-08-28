const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, 'dist')));

// Set the MIME type for TypeScript files
express.static.mime.define({'application/typescript': ['ts']});

// Serve other static files if needed
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/src', express.static(path.join(__dirname, 'src')));
app.use('/ts', express.static(path.join(__dirname, 'ts')));

// Start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});