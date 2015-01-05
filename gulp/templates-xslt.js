var gulp = require('gulp'),
    util = require('gulp-util'),
    fs = require('fs'),
    saxon = require('gulp-saxon');

// Error Handler function prevents Gulp from stop watching when find errors
function errorHandler(error){
    util.log(util.colors.red('Error'), error.message);
    this.emit('end');
}

module.exports = function () {
    return gulp.src('./assets/src/templates/pages/index.xml').pipe(
        saxon({
            jarPath: './saxon9he.jar',
            xslPath: './assets/src/templates/pages/index.xsl',
            /*xslPath: function(file) {
                return require('./src/templates/pages/' + path.basename(file.path) + '.xsl');
            },*/
            outputType: '.html',
            timeout: 5000
        })
    ).pipe(gulp.dest('./'))
};