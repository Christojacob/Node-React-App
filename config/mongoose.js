﻿// Load the module dependencies:
//  config.js module and mongoose module
var config = require('./config'),
    mongoose = require('mongoose');
// Define the Mongoose configuration method
module.exports = function() {
    // Use Mongoose to connect to MongoDB
    const db = mongoose.connect(config.db, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        }).then(() => console.log('DB Connected!' + config.db))
        .catch(err => {
            console.log('Error');
        });

    // Load the 'User' model 
    require('../app/models/student.server.model');
    // Load the 'Article' model 
    require('../app/models/course.server.model');
    // Return the Mongoose connection instance
    return db;
};