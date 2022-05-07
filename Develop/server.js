// import files & set up ports
const express = require('express'); // require express
const fs = require('fs');
const path = require('path');
const { animals } = require('./data/animals');
const apiRoutes = require('./routes/apiRoutes/animalRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const PORT = process.env.PORT || 3001;
const app = express(); //instantiate the server