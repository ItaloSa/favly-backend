const express = require('express');
const userController = require('./user.controller');

const User = express.Router();

User.post('/', userController.createUser);
User.get('/:userId', userController.loadUser);
User.put('/:userId', userController.addRepositories);

module.exports = {
    User,
}
