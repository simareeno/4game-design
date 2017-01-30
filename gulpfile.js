var gulp = require('gulp');
var react = require('gulp-react');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync').create();
var path = require('path');
var join = path.join;

var AutoPrefixPlugin = require('less-plugin-autoprefix');
var autoprefix = new AutoPrefixPlugin({
	browsers: ["> 0%"]
});

var DEST = 'out',
		SRC = 'libs',
		TEMPLATES = join(SRC, 'templates'),
		STYLES = join(SRC, 'styles'),
		SCRIPTS = join(SRC, 'scripts'),
		IMAGES = join(SRC, 'images');

gulp.task('img', function() {
	return gulp.src(join(IMAGES, '**/*'))
		.pipe(plumber())
		.pipe(gulp.dest(join(DEST, 'img')));
});

gulp.task('html', function() {
	return gulp.src([join(TEMPLATES, '*.html')])
		.pipe(plumber())
		.pipe(gulp.dest(DEST));
});

gulp.task('scripts', function() {
	return gulp.src(join(SCRIPTS, '**/*'))
		.pipe(plumber())
		.pipe(gulp.dest(join(DEST, 'scripts')));
});

gulp.task('styles', function() {
	return gulp.src(join(STYLES, '*.less'))
		.pipe(plumber())
		.pipe(less({
			plugins: [autoprefix]
		}))
		.pipe(gulp.dest(join(DEST, 'css')));
});

gulp.task('html:sync', ['html'], function(done) {
	browserSync.reload();
	done();
});


gulp.task('styles:sync', ['styles'], function(done) {
	browserSync.reload();
	done();
});


gulp.task('scripts:sync', ['scripts'], function(done) {
	browserSync.reload();
	done();
});

gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: './out'
		},
	})
	gulp.watch(join(TEMPLATES, '*.html'), ['html:sync']);
	gulp.watch(join(IMAGES, '**/*'), ['img']);
	gulp.watch(join(STYLES, '*.less'), ['styles:sync']);
	gulp.watch(join(SCRIPTS, '**/*'), ['scripts:sync']);
})

gulp.task('watch', ['browserSync'], function() {
	gulp.watch(join(TEMPLATES, '*.html'), ['html']);
	gulp.watch(join(IMAGES, '**/*'), ['img']);
	gulp.watch(join(STYLES, '*.less'), ['styles']);
	gulp.watch(join(SCRIPTS, '**/*'), ['scripts']);
});

gulp.task('default', ['img', 'styles', 'scripts', 'html']);
