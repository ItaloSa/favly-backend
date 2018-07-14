const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    repositories: [Schema.Types.Mixed],
}, {
    timestamps: true,
});

module.exports = mongoose.model('User', userSchema);
