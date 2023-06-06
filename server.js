const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const Router = require('./Routes/movies.js');


app.use(bodyParser({urlencoded:false}));
app.use(Router);

app.listen(3000);