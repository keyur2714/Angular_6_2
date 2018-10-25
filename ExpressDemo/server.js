// import dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
var router = express.Router()

// Get our API routes
const api = require('./server/routes/api');

//create express instance
const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist -- Client/FrontEnd Request
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes -- Server/BackEnd Rest API Request
//if /api in url then route it to api.js
app.use('/api', 
    router.get('/', (req, res) => {
        res.send('Hello Radhe Krishna From BackEnd...!');
    }),
    router.get('/getStudentList', (req, res) => {
        res.send('Get Student List');
    })
);

// Catch all other routes and return the index file
// all other request route it to single page app index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3030';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));

