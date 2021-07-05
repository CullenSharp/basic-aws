'use strict';

// 3rd party resources
require('dotenv').config();
const PORT = process.env.PORT || 3001;

// esoteric resources
const server = require('./src/server.js');

server.start(PORT);
