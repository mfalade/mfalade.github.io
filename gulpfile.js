'use strict';

var gulp = require('gulp'),
    path = require('path'),
    jade = require('gulp-jade'),
    sass = require('gulp-sass'),
    babel = require('gulp-babel'),
    browserSync = require('browser-sync').create();

var source_files = {
    sass: './src/sass/**/*.sass',
    jade: './src/jade/**/*.jade',
    scripts: './src/scripts/*.js'
};

var output_files = {
    html: './',
    css: './dist/css/',
    js: './dist/js/build.js'
};


gulp.task('jade', function () {
    var locals = {};
    gulp.src(source_files.jade)
        .pipe(jade({ locals: locals }))
        .pipe(gulp.dest(output_files.html))
        .pipe(browserSync.stream());
});


gulp.task('sass', function () {
    return gulp.src(source_files.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(output_files.css))
        .pipe(browserSync.stream());
});


gulp.task('babelify', function () {
    return gulp.src(source_files.scripts)
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist/js'));
});


gulp.task('serve', ['sass', 'jade', 'babelify'], function () {

    browserSync.init({
        server: "./"
    });

    gulp.watch(source_files.jade, ['jade']);
    gulp.watch(source_files.sass, ['sass']);
    gulp.watch(source_files.scripts, ['babelify']);
    gulp.watch('./index.html').on('change', browserSync.reload);
});


gulp.task('default', ['serve']);
