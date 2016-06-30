var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect'),
    dest = require('gulp-dest'),
    notify = require('gulp-notify'),
    concatCSS = require('gulp-concat-css'),
    less = require('gulp-less'),
    watch = require('gulp-watch');


//html-watch
gulp.task('html', function(){
    return gulp.src('*.html')
        .pipe(watch('*.html'))
        .pipe(connect.reload());
});

//less-watch
gulp.task('less', function () {
    return gulp.src('less/*.less')
        .pipe(watch('less/*.less'))
        .pipe(less())
        .pipe(gulp.dest('css/'))
        .pipe(connect.reload())
        .pipe(notify('Done!'));
});

//css-watch
gulp.task('css', function () {
    return gulp.src('css/*.css')
        .pipe(watch('css/*.css'))
        .pipe(connect.reload());
});

//js-watch
gulp.task('js', function () {
    return gulp.src('js/*.js')
        .pipe(watch('js/*.js'))
        .pipe(connect.reload());
});

//connect
gulp.task('connect', function() {
    connect.server({
        root: '',
        livereload: true
    });
});

//gulp-default
gulp.task('default', ['html', 'connect', 'less', 'css']);