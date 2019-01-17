const gulp = require('gulp');
const javascriptObfuscator = require('gulp-javascript-obfuscator');
 

 gulp.task('default', function() {
	gulp.src('done.js')
    	.pipe(javascriptObfuscator())
    	.pipe(gulp.dest('js'));
});

