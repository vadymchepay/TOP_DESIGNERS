var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-clean-css'),
    rename = require("gulp-rename"),
    browserSync = require('browser-sync').create(),
    image = require('gulp-image'),
    del  = require('del'),
    cache = require('gulp-cache');
    

gulp.task('browser-sync', ['styles', 'index', 'html', 'image', 'scripts', 'fonts', 'libs'], function(){
    browserSync.init({
        server: {
            baseDir: 'build'
        },
        notify: false
    });
});

gulp.task('image', function(){
    gulp.src('./app/img/**/*')
    .pipe(cache(image()))
    .pipe(gulp.dest('./build/img'))
});


//compile scss code
gulp.task('styles', function(){
    return gulp.src('./app/style/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename({
        suffix: '.min',
        preffix: ''
    }))
    .pipe(autoprefixer({
        browsers: ['last 10 versions'],
        cascade: true
    }))
    .pipe(minifycss())
    .pipe(gulp.dest('build/css'))
    .pipe(browserSync.stream());
});
//compile  html code
gulp.task('html', function(){
    return gulp.src('./app/templates/**/*.html')
    .pipe(gulp.dest('build/templates'))
});

gulp.task('index', function(){
    return gulp.src('./app/index.html')
    .pipe(gulp.dest('build'))
});

gulp.task('scripts', function(){
    return gulp.src('./app/script/**/*.js')
    .pipe(gulp.dest('build/script'))
});

gulp.task('fonts', function(){
    return gulp.src('./app/fonts/**/*')
    .pipe(gulp.dest('build/fonts'))
});

gulp.task('libs', function(){
    return gulp.src('./app/libs/**/*')
    .pipe(gulp.dest('build/libs'))
});


gulp.task('clean', function() {
    return del.sync('build');

});



gulp.task('build', ['clean', 'index', 'styles', 'html', 'image',  'scripts', 'fonts', 'libs']);


gulp.task('watch', function(){
    gulp.watch('app/style/**/*.scss', ['styles']);
    gulp.watch('app/templates/**/*.html', ['html']);
    gulp.watch('app/scripts/**/*.js', ['scripts']);
    gulp.watch('app/*.html').on('change', browserSync.reload);
});

gulp.task('clear', function () {
    return cache.clearAll();
});

gulp.task('default', ['browser-sync', 'watch']);