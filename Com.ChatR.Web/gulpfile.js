// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

//transpile ES6 into ES5
gulp.task('scripts', function () {
	return gulp.src([
			'Scripts/React/Components/ChatItem.jsx',
			'Scripts/React/Components/ChatInitialization.jsx',
			'Scripts/React/Components/UserList.jsx',
			'Scripts/React/Components/ChatWindow.jsx',
			'Scripts/React/Components/MainChat.jsx',
			'Scripts/React/Components/Render.jsx',
		])
		.pipe(babel({
			presets: ['react', 'es2015']
		}))
		.pipe(concat('components.js'))
		.pipe(jshint())
		.pipe(rename('components.min.js'))
		//.pipe(uglify())
		.pipe(gulp.dest('Scripts/React/Components'));
});

// Watch Files For Changes
gulp.task('watch', function ()
{
	gulp.watch([
			'Scripts/React/Components/ChatItem.jsx',
			'Scripts/React/Components/ChatInitialization.jsx',
			'Scripts/React/Components/UserList.jsx',
			'Scripts/React/Components/ChatWindow.jsx',
			'Scripts/React/Components/MainChat.jsx',
			'Scripts/React/Components/Render.jsx',
		], ['scripts']);
});

// Default Task
gulp.task('default', ['scripts', 'watch']);