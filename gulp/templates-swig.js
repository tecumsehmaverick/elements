var gulp = require('gulp'),
    util = require('gulp-util'),
    plumber = require('gulp-plumber'),
    swig = require('gulp-swig'),
    minifyhtml = require('gulp-minify-html');

// Error Handler function prevents Gulp from stop watching when find errors
function errorHandler(error){
    util.log(util.colors.red('Error'), error.message);
    this.emit('end');
}

module.exports = function () {
    return gulp.src('./assets/src/templates/pages/*.html')
        .pipe(plumber({errorHandler: errorHandler}))
        //.pipe(data(getJsonData))
        .pipe(swig({ load_json: true, defaults: { cache: false } }))
        .pipe(minifyhtml())
        .pipe(gulp.dest('./'));
};