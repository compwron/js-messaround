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
var mocha = require('gulp-mocha');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var del = require('del');

gulp.task('clean:public', function () {
  return del([
    'public/**/*'
  ]);
});

gulp.task('default', ['clean:mobile']);

gulp.task('clean', function() {
  // delete everything in public/
});

gulp.task('default', [  'clean:public',
                        'bower',
                        'lint',
                        'javascript',
                        'vendor-js',
                        'vendor-bootstrap',
                        'css',
                        'mocha',
                        ], function() {
  return gutil.log('Default: clean, get dependencies, lint, compress javascript and css, run tests')
});

gulp.task('javascript', function() {
  return gulp.src('src/js/**/*.js')
    .pipe(concat('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public'));
});

gulp.task('vendor-js', function() {
  return gulp.src(['bower_components/jquery/dist/jquery.min.js'])
    .pipe(concat('vendor.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public'));
});

gulp.task('vendor-bootstrap', function() {
  return gulp.src(['bower_components/bootstrap/dist/**/*.*'], { base: './bower_components' })
    .pipe(gulp.dest('public'));
});

gulp.task('css', function() {
  return gulp.src('src/css/**/*.css')
    .pipe(concat('all.min.css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('public'));
});

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

// ruby bower and move the results to public and minify them
