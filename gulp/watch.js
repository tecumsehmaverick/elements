var gulp = require('gulp');

module.exports = function () {
    return gulp.task('watch', function() {
        gulp.watch(['./assets/src/**/*.scss'], ['styles-sass']);
        gulp.watch(['./assets/src/**/*.js'], ['scripts']);
    });
}