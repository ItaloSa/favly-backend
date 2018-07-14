const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')({origin: true});
const mongoose = require('mongoose');

const app = express();
const jsonParser = bodyParser.json();

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

app.use(cors);
app.use(jsonParser);

mongoose.connect(MONGO_URI);

mongoose.connection.on('error', () => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

mongoose.connection.once('open', () => {
    console.log("Successfully connected to the database");
});

app.get('/', (req, res) => {
    res.json({message: 'hello!'});
});

app.listen(PORT, () => {
    console.log(`FavlyBack running on port ${PORT}`);
})
