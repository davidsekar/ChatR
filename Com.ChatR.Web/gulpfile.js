'use strict';

var sassPath = "./style/**/*.scss";
var cssPath = "./style";

var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var notify = require("gulp-notify");

gulp.task('CopyDep', function () {
    var depSrc = ["./node_modules/react-draggable/dist/*.*",
        "./node_modules/react-router/umd/*.*",
        "./node_modules/store/store.js",
        "./node_modules/store/store.min.js"];

    gulp.src(depSrc).pipe(gulp.dest("./Scripts/external"));
});


gulp.task('sass', function () {
    gulp.src(sassPath)
    .pipe(plumber({ errorHandler: notify.onError("Error: <%=error.message %>") }))
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer({ browsers: ['> 1%', 'IE 8'], cascade: false }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(cssPath));
});

gulp.task('watch', function () {
    gulp.watch(sassPath, ['sass']);
});