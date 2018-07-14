const userService = require('./user.service');

module.exports = {
    createUser,
    loadUser,
    addRepositories,
}

function createUser(req, res) {
    userService.createUser()
        .then((data) => {
            res
                .status(200)
                .json({data})
        })
        .catch((errCode) => {
            res
                .status(400)
                .json({message: `Can't create user.`, errorCode: errCode})
        });
}

function loadUser(req, res) {
    let userId = req.params.userId;
    userService.loadUser(userId)
        .then((user) => {
            res
                .status(200)
                .json({user});
        })
        .catch((errCode) => {
            res
                .status(400)
                .json({message: `User not found`, errorCode: errCode});
        });
}

function addRepositories(req, res) {
    let userId = req.params.userId;
    let repositories = req.body.repositories;

    userService.addRepositories(userId, repositories)
        .then((updatedUser) => {
            res
                .status(200)
                .json({user: updatedUser});
        })
        .catch((errCode) => {
            res
                .status(400)
                .json({message: `Can't update user`, errorCode: errCode});
        });
}
