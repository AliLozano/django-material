import autoprefixer from 'autoprefixer';
import gulp from 'gulp';
import postcss from 'gulp-postcss';
import sass from 'gulp-sass';


gulp.task('default', () => {
    return gulp.src('./material/static/material/sass/*.scss')
        .pipe(sass({
            includePaths: './node_modules/'
        }).on(
            'error', sass.logError
        ))
        .pipe(postcss([
            autoprefixer({
                browsers: [
                    'Chrome >= 50',
                    'Firefox >= 46',
                    'Explorer >= 11',
                    'Safari >= 9',
                    'ChromeAndroid >= 50',
                    'FirefoxAndroid >= 46',
                ]
            })
        ]))
        .pipe(gulp.dest(
            './material/static/material/css/'
        ));
});
