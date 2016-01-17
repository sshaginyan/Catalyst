import 'babel-polyfill';

import gulp from 'gulp';
import gulpBabel from 'gulp-babel';
import gulpNodemon from 'gulp-nodemon';

gulp.task('transpile', () => {
    return gulp.src('src/**/*.js')
    	.pipe(gulpBabel({
	    presets: ['es2015-node5']
	}))
    	.pipe(gulp.dest('dist'));
});

gulp.task('default', ['transpile'], () => {
    gulpNodemon({
	script: 'dist',
	verbose: true,
	env: {
            'NODE_ENV': 'development'
	},
	watch: 'src',
	ext: 'js',
	tasks: ['transpile']
    });
});
