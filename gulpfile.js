var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');
var nunjucks = require('gulp-nunjucks');

gulp.task('nunjucks', function(){
  return gulp.src('app/templates/*.html')
  .pipe(nunjucks.compile())
  .pipe(gulp.dest('app'))
});

gulp.task('sass', function(){
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('app/css'))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('images', function(){
  return gulp.src('app/img/**/*.+(png|jpg|jpeg|gif|svg)')
  // Caching images that ran through imagemin
  .pipe(cache(imagemin({
      interlaced: true
    })))
  .pipe(gulp.dest('dist/images'))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
});


gulp.task('useref', function(){
  return gulp.src('app/*.+(html|xml|ico|png)')
    .pipe(useref())
    // Minifies only if it's a JavaScript file
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('dist'))
});


gulp.task('images', function(){
  return gulp.src('app/img/**/*.+(png|jpg|jpeg|gif|svg)')
  // Caching images that ran through imagemin
  .pipe(cache(imagemin({
      interlaced: true
    })))
  .pipe(gulp.dest('dist/img'))
});

gulp.task('clean:dist', function() {
  return del.sync(['dist/**/*', '!dist/img', '!dist/img/**/*']);
})


gulp.task('default', function(callback) {
  runSequence(['sass', 'browserSync', 'watch', 'nunjucks'],
    callback
  )
});

gulp.task('build', function(callback) {
  runSequence(
    'clean:dist',
    'sass',
    ['useref', 'images'],
    callback
  )
});

gulp.task('watch', ['browserSync', 'sass', 'nunjucks'], function(){
  gulp.watch('app/scss/**/*.s*ss', ['sass']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/templates/*.html', ['nunjucks']);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});
