var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
//bower auto reload
var browserSync = require('browser-sync').create();

var gutil = require('gulp-util');

gulp.task('hello', function() {
    console.log('Hello Zell');
});


//gulp.task('saas', function(){
//  return gulp.src('app/scss/custom.scss')
//    .pipe(sass()) // Using gulp-sass
//    .pipe(gulp.dest('app/css'))
//});


gulp.task('sass', function() {
  return gulp.src('app/scss/custom.scss') // Gets all files ending with .scss in app/scss
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// Gulp watch syntax

gulp.task('reloadAll', function() {
  return browserSync.reload({
      stream: true
    })
});

gulp.task('watch',['browserSync'], function(){
      gulp.watch('app/scss/custom.scss', ['sass']); 
      gulp.watch('app/*.html', browserSync.reload
      );  // Other watchers
      gulp.watch('app/js/*.js', browserSync.reload
      );  // Other watchers
})

//gulp.watch('app/scss/custom.scss', ['saas']); 


gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})

//https://css-tricks.com/gulp-for-beginners/

