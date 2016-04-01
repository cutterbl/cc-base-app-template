'use strict';

var fs = require('fs'),
    argv = require('yargs').argv,
    tasks = fs.readdirSync(__dirname + '/tasks/'),
    gutil = require('gulp-util'),
    gulp = require('gulp');

tasks.forEach(function (task) {
    require('./tasks/' + task);
});