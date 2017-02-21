var gulp = require('gulp'),
    imagemin = require('gulp-imagemin');

gulp.task('img-min', () =>
    gulp.src('assets/img/**/*')
        .pipe(imagemin({}))
        .pipe(gulp.dest('assets/img/'))
);
