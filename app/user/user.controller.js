const userService = require('./user.service');

module.exports = {
    createUser,
    loadUser,
    addRepository,
    delRepository,
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

function addRepository(req, res) {
    let userId = req.params.userId;
    let repository = req.body.repository;

    userService.addRepository(userId, repository)
        .then((updatedUser) => {
            res
                .status(200)
                .json({updatedUser});
        })
        .catch((errCode) => {
            res
                .status(400)
                .json({message: `Can't insert repository`, errorCode: errCode});
        });
}

function delRepository(req, res) {
    let userId = req.params.userId;
    let repositoryId = req.body.repositoryId;

    userService.delRepository(userId, repositoryId)
        .then((updatedUser) => {
            res
                .status(200)
                .json({updatedUser});
        })
        .catch((errCode) => {
            res
                .status(400)
                .json({message: `Can't remove repository`, errorCode: errCode});
        });
}
