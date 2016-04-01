'use strict';

var gulp = require('gulp'),
    config = require('../config'),
    runsequence = require('run-sequence');

module.exports = gulp.task('main', function (callback) {
    return runsequence('transpile', 'browserify', 'less', 'html', 'fonts', callback);
});