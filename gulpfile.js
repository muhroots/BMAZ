var gulp = require('gulp'),
	stylus = require('gulp-stylus'),
	minifyCSS = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

gulp.task('javascript', function () {
  	gulp.src(['build/js/plugins/*.js'])
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('assets/js/'));
});

gulp.task('stylus', function () {
    gulp.src('build/stylus/style.styl')
        .pipe(stylus({
            compress: true,
        }))
        .pipe(minifyCSS())
        .pipe(gulp.dest('assets/css'));
});

gulp.task('watch', function () {
 	gulp.watch(['build/**/*.styl'], ['stylus']);
    gulp.watch(['build/**/*.js'], ['javascript']);
});


gulp.task('default', ['stylus', 'javascript', 'watch']);