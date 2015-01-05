var gulp = require('gulp'),
    tasks = [
        //'templates-xslt',
        'templates-swig',
        'styles-sass',
        'scripts',
        'watch'
    ];

// Dynamically load defined tasks from their respective files
tasks.forEach(function(name) {
    gulp.task(name, require('./gulp/' + name));
});

gulp.task('default', ['styles-sass', 'scripts', 'templates-swig', 'watch']);