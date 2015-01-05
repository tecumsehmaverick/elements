var gulp = require('gulp'),
    util = require('gulp-util'),
    plumber = require('gulp-plumber'),
    addsrc = require('gulp-add-src'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

// Error Handler function prevents Gulp from stop watching when find errors
function errorHandler(error){
    util.log(util.colors.red('Error'), error.message);
    this.emit('end');
}

module.exports = function () {
    return gulp.src(['./assets/src/**/*.js', '!./assets/src/scripts/vendors/**/*.js'])
        .pipe(plumber({errorHandler: errorHandler}))
        //.pipe(jshint('.jshintrc'))
        //.pipe(jshint.reporter('jshint-stylish'))
        .pipe(addsrc('./assets/src/scripts/vendors/**/*.js'))
        //.pipe(uglify())
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest('./assets/dist/js/'));
};