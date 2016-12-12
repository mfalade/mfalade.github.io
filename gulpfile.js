'use strict';

const gulp = require('gulp');
const jade = require('gulp-jade');
const sass = require('gulp-sass');
const babelify = require('babelify');
const buffer = require('vinyl-buffer');
const plumber = require('gulp-plumber');
const browserify = require('browserify');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const source = require('vinyl-source-stream');
const browserSync = require('browser-sync').create();

const source_files = {
    sass: './src/sass/**/*.sass',
    jade: './src/jade/**/*.jade',
    scripts: './src/scripts/**/*.js',
    jsEntry: './src/scripts/index.js'
};

const output_files = {
    html: './',
    css: './dist/css/',
    js: './dist/js'
};


gulp.task('jade', () => {
    let locals = {};
    gulp.src(source_files.jade)
        .pipe(plumber())
        .pipe(jade({ locals: locals }))
        .pipe(gulp.dest(output_files.html))
        .pipe(browserSync.stream());
});


gulp.task('sass', () => {
    return gulp.src(source_files.sass)
        .pipe(plumber())
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest(output_files.css))
        .pipe(browserSync.stream());
});


gulp.task('scripts', function () {
    return browserify({entries: source_files.jsEntry, debug: true})
        .transform("babelify", {presets: ["es2015"]})
        .bundle()
        .on('error', (err) => { console.error(err); })
        .pipe(source('build.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(browserSync.stream());
});


gulp.task('serve', ['sass', 'jade', 'scripts'], () => {

    browserSync.init({
        server: "./"
    });

    gulp.watch(source_files.jade, ['jade']);
    gulp.watch(source_files.sass, ['sass']);
    gulp.watch(source_files.scripts, ['scripts']);
    gulp.watch('./index.html').on('change', browserSync.reload);
});


gulp.task('default', ['serve']);
