const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI;

function Run() {

    mongoose.connect(MONGO_URI);

    mongoose.connection.on('error', () => {
        console.log('Could not connect to the database. Exiting now...');
        process.exit();
    });

    mongoose.connection.once('open', () => {
        console.log("Successfully connected to the database");
    });
}

exports.Run = Run;