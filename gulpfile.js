var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    server = require('gulp-webserver')
gulp.task('jshint', function() {
    return gulp.src('build/static/js/**/*.js').pipe(jshint('./.jshintrc')).pipe(jshint.reporter('jshint-stylish'))
})
gulp.task('watch', function() {
    gulp.watch('build/static/js/**/*.js', ['jshint'])
})
gulp.task('server', function() {
    gulp.src('build/').pipe(server({ livereload: true, open: true }))
})
gulp.task('default', ['jshint', 'server', 'watch'])
