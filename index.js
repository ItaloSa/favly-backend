const nodemon = require('nodemon');

nodemon({
    script: 'app.js',
    ext: 'js json',
});

nodemon.on('start', () => {
    console.log('App has started...');
}).on('quit', () => {
    console.log('App has quit');
}).on('restart', (files) => {
    console.log(`App has restarted due to: ${files}`);
});