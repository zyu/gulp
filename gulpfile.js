// generated on 2016-06-30 using generator-webapp 2.1.0
const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const browserSync = require('browser-sync');
const del = require('del');
const wiredep = require('wiredep').stream;
const concat = require('gulp-concat');
const $ = gulpLoadPlugins();

const reload = browserSync.reload;

var paths = {
    webroot: "./"
};

paths.concatJsDest = paths.webroot + "site.min.js";

paths.js = paths.webroot + "app/scripts/*.js";
paths.minJs = paths.webroot + "app/scripts/*.min.js";

gulp.task("min:js", function () {
    return gulp.src([paths.js, "!" + paths.minJs], { base: "." }) 
      .pipe($.uglify())
      .pipe(gulp.dest("./dist/scripts"));
});

gulp.task("min:css",function(){
  return gulp.src('app/styles/*.css')
        .pipe($.sourcemaps.init())
        .pipe($.cssnano())
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/styles'));
});
gulp.task('scripts', () => {
  return gulp.src('app/scripts/*.js')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.babel()) 
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('.tmp/scripts'))
    .pipe(reload({stream: true}));
});


gulp.task('styles', () => {
  return gulp.src('app/styles/*.scss')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass.sync({
      outputStyle: 'expanded',
      precision: 10,
      includePaths: ['.']
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer({browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']}))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('.tmp/styles'))
    .pipe(reload({stream: true}));
});

gulp.task('html', ['styles', 'scripts'], () => {
  return gulp.src('app/*.html')
    .pipe($.useref({searchPath: ['.tmp', 'app', '.']}))

    .pipe($.if('*.js',  $.uglify()))
    .pipe($.if('*.css', $.cssnano({safe: true, autoprefixer: false})))
    .pipe($.if('*.html', $.htmlmin({collapseWhitespace: true}))) 
    .pipe(gulp.dest('dist'));
});


gulp.task('usemin', function() {
  return gulp.src('app/*.html')
    .pipe($.usemin({
      css: [ $.cssnano({safe: true, autoprefixer: false}) ,$.rev() ],
      html: [ $.htmlmin({collapseWhitespace: true})],
      js: [ $.uglify(), $.rev() ],
      inlinejs: [ $.uglify() ],
      inlinecss: [ $.cssnano({safe: true, autoprefixer: false}) ]
    }))
    .pipe(gulp.dest('build/'));
});

function lint(files, options) {
  return gulp.src(files)
    .pipe(reload({stream: true, once: true}))
    .pipe($.eslint(options))
    .pipe($.eslint.format())
    .pipe($.if(!browserSync.active, $.eslint.failAfterError()));
}
 
 
gulp.task('clean', del.bind(null, ['.tmp', 'dist','build']));