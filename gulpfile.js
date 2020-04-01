let gulp = require('gulp');
let browserSync = require('browser-sync').create();
let sass = require('gulp-sass');

// Static Server + watching scss/html files
gulp.task('serve', function () {

  // browserSync.init({
  //   server: "./build/public"
  // });

  gulp.watch("build/scss/**/*.scss", ['sass']);
  // gulp.watch("build/public/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
  return gulp.src("build/scss/*.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest("build/public/css"))
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('public/css'))
    .pipe(browserSync.stream());
});

gulp.task('default', ['sass', 'serve']);