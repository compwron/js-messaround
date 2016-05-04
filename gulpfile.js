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
var jslint = require('gulp-jslint');

gulp.task('lint', function () {
    return gulp.src(['source.js'])
            .pipe(jslint({ /* this object represents the JSLint directives being passed down */ }))
            .pipe(jslint.reporter('default', errorsOnly));
});

gulp.task('browserify', function () {
  var browserified = transform(function(filename) {
    var b = browserify(filename);
    return b.bundle();
  });

  return gulp.src(['./public/javascript/*.js'])
    .pipe(browserified)
    .pipe(gulp.dest('./dist'));
});

gulp.task('css', function(){
    return gulp.src('./css/src/style.css')
        .pipe(autoprefixer('last 2 versions'))
        .pipe(gulp.dest('./css/'))
        .pipe(minifyCss())
        .pipe(rename({extname: '.min.css'}))
        .pipe(gulp.dest('./css/'));
});

gulp.task('bower', function() {
  return bower();
});

gulp.task('log-check', function() {
  return gutil.log('Gulp is running!')
});

gulp.task('default', function () {

  return gulp.src('public/javascript/**/*.js', {read: false})

    // transform file objects using gulp-tap plugin
    .pipe(tap(function (file) {

      gutil.log('bundling ' + file.path);

      // replace file contents with browserify's bundle stream
      file.contents = browserify(file.path, {debug: true}).bundle();

    }))

    // transform streaming contents into buffer contents (because gulp-sourcemaps does not support streaming contents)
    .pipe(buffer())

    // load and init sourcemaps
    .pipe(sourcemaps.init({loadMaps: true}))

    .pipe(uglify())

    // write sourcemaps
    .pipe(sourcemaps.write('./browserified_js/'))

    .pipe(gulp.dest('dest'));

});
