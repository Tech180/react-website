const express = require('express');
const cors = require('cors');
const emailRouter = require('./email');
const musicRouter = require('./musicServer');
const igdbRouter = require('./IGDB');
const fruitRouter = require('./fruit');

const app = express();
//const PORT = process.env.PORT || 3001;
const PORT = 3001;

app.use(cors());

//app.use('/api/email', emailRouter);
//app.use('/api/music', musicRouter);
app.use(`/api/games/`, igdbRouter);
app.use('/api/fruits/', fruitRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});