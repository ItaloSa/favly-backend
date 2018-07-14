const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')({origin: true});
const DataBase = require('./mongo.config');

const UserRouter = require('./user/user.router');

const app = express();
const jsonParser = bodyParser.json();

const PORT = process.env.PORT;

DataBase.Run();

app.use(cors);
app.use(jsonParser);
app.use('/user', UserRouter.User);

app.get('/', (req, res) => {
    res.json({message: 'hello!'});
});

app.listen(PORT, () => {
    console.log(`FavlyBack running on port ${PORT}`);
});
