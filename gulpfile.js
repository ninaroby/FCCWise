var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    server = require('gulp-webserver'),
    sass = require('gulp-sass')
gulp.task('jshint', function() {
    return gulp.src('build/static/js/app/*.js').pipe(jshint('./.jshintrc')).pipe(jshint.reporter('jshint-stylish'))
})
gulp.task('sass', function() {
    gulp.src('build/static/css/style.sass').pipe(sass().on('error', sass.logError)).pipe(gulp.dest('build/static/css/'))
})
gulp.task('watch', function() {
    gulp.watch('build/static/css/*.sass', ['sass'])
    gulp.watch('build/static/js/**/*.js', ['jshint'])
})
gulp.task('server', function() {
    gulp.src('build/').pipe(server({ livereload: true, open: true }))
})
gulp.task('default', ['jshint', 'server', 'sass', 'watch'])
