const User = require('./user.model');
const consts = require('../consts');

module.exports = {
    createUser,
    loadUser,
    addRepository,
    delRepository,
}

function createUser() {
    return new Promise((resolve, reject) => {
        let user = new User();
        user.save((err, data) => {
            if (err) {
                console.log(err);
                reject(consts.ERR_CREATE_USER);
            } else {
                resolve(data);
            }
        });
    });
}

function loadUser(userId) {
    return new Promise((resolve, reject) => {
        User.findById(userId, (err, user) => {
            if (err) {
                console.log(err);
                reject(consts.ERR_LOAD_USER);
            } else {
                resolve(user);
            }
        })
    });
}

function addRepository(userId, repository) {
    return new Promise((resolve, reject) => {
        loadUser(userId)
            .then((user) => {
                
                user.repositories.push(repository);
                
                user.save((err, updatedUser) => {
                    if (err) {
                        console.log(err);
                        reject(consts.ERR_UPDATE_USER);
                    } else {
                        resolve(updatedUser);
                    }
                });
            })
            .catch(() => {
                reject(consts.ERR_LOAD_USER);
            });
    });
}

function delRepository(userId, repositoryId) {
    return new Promise((resolve, reject) => {
        loadUser(userId)
            .then((user) => {
                let updatedRepositories = user.repositories.filter((repository) => {
                    return repositoryId != repository.id;
                });
                console.log(updatedRepositories);
                user.repositories = updatedRepositories;
                user.save((err, updatedUser) => {
                    if (err) {
                        console.log(err);
                        reject(consts.ERR_UPDATE_USER);
                    } else {
                        resolve(updatedUser);
                    }
                });
            })
            .catch(() => {
                reject(consts.ERR_LOAD_USER);
            });
    });
}
