var gulp = require('gulp'),
    util = require('gulp-util'),
    plumber = require('gulp-plumber'),
    scsslint = require('gulp-scsslint'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename');

// Error Handler function prevents Gulp from stop watching when find errors
function errorHandler(error){
    util.log(util.colors.red('Error'), error.message);
    this.emit('end');
}

module.exports = function () {
    return gulp.src('./assets/src/styles/main.scss')
        .pipe(plumber({errorHandler: errorHandler}))
        //.pipe(scsslint('.scss-lint.yml'))
        //.pipe(scsslint.reporter())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(minifycss())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./assets/dist/css/'));
};