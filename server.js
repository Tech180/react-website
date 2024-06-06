const express = require('express');
const cors = require('cors');
//const emailRouter = require('./src/components/backend/email');
//const musicRouter = require('./src/components/backend/musicServer');
const igdbRouter = require('./src/components/backend/IGDB');
const fruitRouter = require('./src/components/backend/fruit');
const affirmationRouter = require('./src/components/backend/affirmations');
const pokeRouter = require('./src/components/backend/pokeAPI');

const app = express();
//const PORT = process.env.PORT || 3001;
const PORT = 3001;

app.use(cors());

//app.use('/api/email', emailRouter);
//app.use('/api/music', musicRouter);
app.use(`/api/games/`, igdbRouter);
app.use('/api/fruits/', fruitRouter);
app.use('/api/affirmations/', affirmationRouter);
app.use('/api/pokeapi/', pokeRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});