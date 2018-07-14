const express = require('express');
const userController = require('./user.controller');

const User = express.Router();

User.post('/', userController.createUser);
User.get('/:userId', userController.loadUser);
User.post('/:userId/addrepository', userController.addRepository);
User.delete('/:userId/delrepository', userController.delRepository);

module.exports = {
    User,
}
