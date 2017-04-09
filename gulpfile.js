var gulp = require('gulp'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload'),
    connect = require('connect'),
    serveStatic = require('serve-static'),
    octicons = require("gulp-octicons");

// Pipe styles
gulp.task('sass', function() {
    gulp.src('./styles/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./styles/css'))
        .pipe(livereload());
});

// Pipe html 
gulp.task('html', function() {
    gulp.src('*.html')
        .pipe(livereload());
});

// Pipe js 
gulp.task('js', function() {
    gulp.src(['./scripts/**/*.js', './scripts/*.js'], { base: './scripts/' })
        .pipe(livereload());
});

// Pipe icons
gulp.task('icons', function() {
    gulp.src("./views/*.html")
        .pipe(octicons())
        .pipe(gulp.dest('./views'))
        .pipe(livereload());
});

// Create Server
gulp.task('server', function() {
    connect()
        .use(require('connect-livereload')())
        .use(serveStatic(__dirname + '/'))
        .listen('3333');

    console.log('Server is running here: http://localhost:3333');
});

// Create watchers for server
gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('./styles/sass/*.scss', ['sass']);
    gulp.watch('./views/*.html', ['html']);
    gulp.watch('./scripts/**/*.js', ['js']);
    gulp.start('server');
});

// Pipe on start
gulp.task('default', ['watch', 'sass', 'html', 'js', 'icons']);
