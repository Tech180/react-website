const express = require('express');
const emailRouter = require('./email');
const musicRouter = require('./musicServer');
const app = express();
const PORT = process.env.PORT || 3001;

app.use('/api/email', emailRouter);
app.use('/api/music', musicRouter);

app.listen(PORT);