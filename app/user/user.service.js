const User = require('./user.model');
const consts = require('../consts');

module.exports = {
    createUser,
    loadUser,
    addRepositories,
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

function addRepositories(userId, repositories) {
    return new Promise((resolve, reject) => {
        loadUser(userId)
            .then((user) => {

                for (let i = 0; i < repositories.length; i++) {
                    user.repositories.push(repositories[i]);
                }

                user.save((err, updatedUser) => {
                    if (err) {
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
