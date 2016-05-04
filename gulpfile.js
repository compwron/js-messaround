var gulp = require('gulp');
var browserify = require('browserify');
var gutil = require('gulp-util');
var tap = require('gulp-tap');
var buffer = require('gulp-buffer');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var bower = require('gulp-bower');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var browserify = require('browserify');
var transform = require('vinyl-transform');
var eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

gulp.task('mocha', () => {
    return gulp.src('test/*test.js', {read: false})
        .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('lint', function () {
    // TODO Remove the exclusions for bootstrap and lib after they're no longer checked in
    return gulp.src(['**/*.js','!node_modules/**', '!public/bootstrap/**', '!public/javascript/lib/**', '!dest/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('bower', function() {
  return bower();
});

gulp.task('log-check', function() {
  return gutil.log('Gulp is running!')
});
