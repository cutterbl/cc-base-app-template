'use strict';

var gulp = require('gulp'),
    cfg = require('../config'),
    usemin = require('gulp-usemin'),
    rev = require('gulp-rev'),
    uglify = require('gulp-uglify');

module.exports = gulp.task('html', function (callback) {
    return gulp.src([cfg.paths.src + '/**/*.html'])
        .pipe(usemin({
            css: [rev()],
            js: [uglify(), rev()]
        }))
        .pipe(gulp.dest(cfg.paths.destWeb))
});