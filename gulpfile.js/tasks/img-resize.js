var gulp = require('gulp'),
    imageResize = require('gulp-image-resize');

gulp.task('img-resize', function () {
    gulp.src('assets/img/events/2016/*')
        .pipe(imageResize({ 
            width : 1024,
            height : 1024,
            upscale: true
        }))
        .pipe(gulp.dest('assets/img/events/2016/'));
});
