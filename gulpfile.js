'use strict';

var gulp = require('gulp'),
    path = require('path'),
    jade = require('gulp-jade'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create();

var source_files = {
    sass: './src/sass/**/*.sass',
    jade: './src/jade/**/*.jade'
};

var output_files = {
    html: './',
    css: './assets/css/'
};


gulp.task('jade', function () {
    var locals = {};
    gulp.src(source_files.jade)
        .pipe(jade({locals: locals}))
        .pipe(gulp.dest(output_files.html))
        .pipe(browserSync.stream());
});


gulp.task('sass', function () {
    return gulp.src(source_files.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(output_files.css))
        .pipe(browserSync.stream());
});


gulp.task('serve', ['sass', 'jade'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch(source_files.jade, ['jade']);
    gulp.watch(source_files.sass, ['sass']);
    gulp.watch('./index.html').on('change', browserSync.reload);
});


gulp.task('default', ['serve']);
