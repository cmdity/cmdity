'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./public/scss/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});
 
gulp.task('default', gulp.series('sass'));

gulp.task('watch', () => {
  gulp.watch('./public/scss/**/*.scss', (done) => {
    gulp.series(['sass'])(done);
  });
});
