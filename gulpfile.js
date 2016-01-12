'use strict';

var browserify = require('browserify')
  , del = require('del')
  , source = require('vinyl-source-stream')
  , vinylPaths = require('vinyl-paths')
  , ftp = require( 'vinyl-ftp' )
  , glob = require('glob')
  , Server = require('karma').Server
  , gulp = require('gulp')
  , sass = require('gulp-sass')
  , runSequence = require('run-sequence')
  , shell = require('gulp-shell')
  , replace = require('gulp-replace');

// Load all gulp plugins listed in package.json
var gulpPlugins = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'gulp.*'],
  replaceString: /\bgulp[\-.]/
});

// Define file path variables
var paths = {
  root:   'app/',         // App root path
  src:    'app/js/',      // Source path
  sass:   'app/sass/',    // SCSS path
  css:    'app/css/',     // CSS path
  fonts:  'app/fonts/',     // Font path
  views:  'app/views/',   // HTML views path
  dist:   'app/dist/',    // Distribution path
  test:   'test/',         // Test path
  assets: 'app/assets/',    // assets
  templates: 'app/templates/',    // templates
  build: 'build/'    // build for production
};

gulp.task('cleansing', function(){
  var base = 'app/assets/game/assets/logic/';
  return gulp.src([base+'**/*.js'])
    .pipe(replace('assets/game', ''))
    .pipe(gulp.dest(base));
});
gulp.task('convert', function(){
  var base = 'app/assets/game/assets/logic/';
  return gulp.src([base+'**/*.js'])
    .pipe(replace('../../../assets', './assets'))
    .pipe(replace('../../assets', './assets'))
    .pipe(replace('./assets', './assets/game/assets'))
    .pipe(gulp.dest(base));
});
gulp.task('convert2', function(){
  var base = 'app/assets/game/';
  return gulp.src([base+'*.js'])
    .pipe(replace('../assets', './assets'))
    .pipe(replace('./assets', './assets/game/assets'))
    .pipe(gulp.dest(base));
});

// BUILD
gulp.task('build', function () {
  runSequence('sass', 'browserify-min');
});

gulp.task('move-js', shell.task([
  'cp ./app/dist/app.min.js ./build/'
]))
/**
 * Deploy
 */
gulp.task( 'deploy-stage', ['build'], function () {
 
    var conn = ftp.create( {
        host:     'siloen.dk',
        user:     'siloen',
        password: 'cxraz999',
        parallel: 10,
        log:      'ftp-log.txt'
    } );
 
    var globs = [
        paths.root + 'index.html',
        paths.views + '**/*',
        paths.dist + '**/*',
        paths.css + '**/*',
        paths.fonts + '**/*',
        paths.assets + '**/*',
        paths.templates + '**/*.html',
    ];
    // using base = '.' will transfer everything to /public_html correctly 
    // turn off buffering in gulp.src for best performance 
 
    return gulp.src( globs, { base: './app', buffer: false } )
        .pipe( conn.newer( '/var/www/html/clients/forsorgsmuseet' ) ) // only upload newer files 
        .pipe( conn.dest( '/var/www/html/clients/forsorgsmuseet' ) );
 
} );
gulp.task( 'deploy-live', ['build'], function () {
 
    var conn = ftp.create( {
        host:     'ftp.fattiggaardellerfjendeland.dk',
        user:     'fattiggaardellerfjendeland.dk',
        password: 'Jwr1866',
        parallel: 1,
        log:      'ftp-live-log.txt'
    } );
 
    var globs = [
        paths.root + 'index.html',
        paths.views + '**/*',
        paths.dist + '**/*',
        paths.css + '**/*',
        paths.fonts + '**/*',
        paths.assets + '**/*',
        paths.templates + '**/*.html',
    ];
    // using base = '.' will transfer everything to /public_html correctly 
    // turn off buffering in gulp.src for best performance 
 
    return gulp.src( globs, { base: './app', buffer: false } )
        .pipe( conn.newer( '/' ) ) // only upload newer files 
        .pipe( conn.dest( '/' ) );
 
} );


gulp.task( 'deploy-game-code-stage', function () {
 
    var conn = ftp.create( {
        host:     'siloen.dk',
        user:     'siloen',
        password: 'cxraz999',
        parallel: 10,
        log:      'ftp-log.txt'
    } );
 
    var globs = [
        paths.assets + 'game/*.js',
        paths.assets + 'game/*.css',
        paths.assets + 'game/index.html',
        paths.assets + 'game/assets/logic/**/*.js',
    ];
    // using base = '.' will transfer everything to /public_html correctly 
    // turn off buffering in gulp.src for best performance 
 
    return gulp.src( globs, { base: './app', buffer: false } )
        .pipe( conn.newer( '/var/www/html/clients/forsorgsmuseet' ) ) // only upload newer files 
        .pipe( conn.dest( '/var/www/html/clients/forsorgsmuseet' ) );
 
} );

gulp.task( 'deploy-web-stage-code', function () {
 
    var conn = ftp.create( {
        host:     'siloen.dk',
        user:     'siloen',
        password: 'cxraz999',
        parallel: 10,
        log:      'ftp-log.txt'
    } );
 
    var globs = [
        paths.root + 'index.html',
        paths.views + '**/*',
        paths.dist + '**/*',
        paths.css + '**/*',
        paths.templates + '**/*.html',
    ];
    // using base = '.' will transfer everything to /public_html correctly 
    // turn off buffering in gulp.src for best performance 
 
    return gulp.src( globs, { base: './app', buffer: false } )
        .pipe( conn.newer( '/var/www/html/clients/forsorgsmuseet' ) ) // only upload newer files 
        .pipe( conn.dest( '/var/www/html/clients/forsorgsmuseet' ) );
 
} );

gulp.task( 'deploy-stage-game-code', function () {
 
    var conn = ftp.create( {
        host:     'siloen.dk',
        user:     'siloen',
        password: 'cxraz999',
        parallel: 10,
        log:      'ftp-log.txt'
    } );
 
    var globs = [
        // paths.root + 'index.html',
        // paths.views + '**/*',
        // paths.dist + '**/*',
        // paths.css + '**/*',
        paths.assets + 'game/*.js',
        paths.assets + 'game/*.css',
        paths.assets + 'game/*.html',
        paths.assets + 'game/assets/logic/**/*.js',
    ];
    // using base = '.' will transfer everything to /public_html correctly 
    // turn off buffering in gulp.src for best performance 
 
    return gulp.src( globs, { base: './app', buffer: false } )
        .pipe( conn.newer( '/var/www/html/clients/forsorgsmuseet' ) ) // only upload newer files 
        .pipe( conn.dest( '/var/www/html/clients/forsorgsmuseet' ) );
 
} );

/*
 * Useful tasks:
 * - gulp fast:
 *   - linting
 *   - unit tests
 *   - browserification
 *   - no minification, does not start server.
 * - gulp watch:
 *   - starts server with live reload enabled
 *   - lints, unit tests, browserifies and live-reloads changes in browser
 *   - no minification
 * - gulp:
 *   - linting
 *   - unit tests
 *   - browserification
 *   - minification and browserification of minified sources
 *   - start server for e2e tests
 *   - run Protractor End-to-end tests
 *   - stop server immediately when e2e tests have finished
 *
 * At development time, you should usually just have 'gulp watch' running in the
 * background all the time. Use 'gulp' before releases.
 */

var liveReload = true;

gulp.task('sass', function () {
  return gulp.src(paths.sass + '**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(paths.css));
});

gulp.task('clean', function () {
  return gulp
  .src([paths.root + 'ngAnnotate', paths.dist, '!lib/**/*'], {read: false})
  .pipe(vinylPaths(del));
});

gulp.task('lint', function () {
  return gulp
  .src(['gulpfile.js',
      paths.src + '**/*.js',
      paths.test + '**/*.js',
      '!' + paths.src + 'third-party/**',
      '!' + paths.test + 'browserified/**',
  ])
  .pipe(gulpPlugins.eslint())
  .pipe(gulpPlugins.eslint.format());
});

gulp.task('unit', function () {
  return gulp.src([
    paths.test + 'unit/**/*.js'
  ])
  .pipe(gulpPlugins.mocha({reporter: 'dot'}));
});

gulp.task('browserify', /*['lint', 'unit'],*/ function () {
  return browserify(paths.src + 'app.js', {debug: true})
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest(paths.dist))
  .pipe(gulpPlugins.connect.reload());
});

gulp.task('ngAnnotate', ['lint'], function () {
  return gulp.src([
      paths.src + '**/*.js',
      '!' + paths.src + 'third-party/**',
  ])
  .pipe(gulpPlugins.ngAnnotate())
  .pipe(gulp.dest(paths.root + 'ngAnnotate'));
});

gulp.task('browserify-min', ['ngAnnotate'], function () {
  return browserify(paths.root + 'ngAnnotate/app.js')
  .bundle()
  .pipe(source('app.min.js'))
  .pipe(gulpPlugins.streamify(gulpPlugins.uglify({mangle: false})))
  .pipe(gulp.dest(paths.dist));
});

gulp.task('browserify-tests', function () {
  var bundler = browserify({debug: true});
  glob
  .sync(paths.test + 'unit/**/*.js')
  .forEach(function (file) {
    bundler.add(file);
  });
  return bundler
  .bundle()
  .pipe(source('browserified_tests.js'))
  .pipe(gulp.dest(paths.test + 'browserified'));
});

gulp.task('karma', ['browserify-tests'], function (done) {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});

gulp.task('server', ['sass', 'browserify'], function () {
  gulpPlugins.connect.server({
    root: 'app',
    livereload: liveReload,
  });
});

gulp.task('e2e', ['server'], function () {
  return gulp.src([paths.test + 'e2e/**/*.js'])
  .pipe(gulpPlugins.protractor.protractor({
    configFile: 'protractor.conf.js',
    args: ['--baseUrl', 'http://127.0.0.1:8080'],
  }))
  .on('error', function (e) {
    throw e;
  })
  .on('end', function () {
    gulpPlugins.connect.serverClose();
  });
});

gulp.task('watch', function () {
  gulp.start('server');
  gulp.watch([
    paths.src + '**/*.js',
    '!' + paths.src + 'third-party/**',
    paths.test + '**/*.js',
    paths.sass + '**/*.scss',
    paths.views + '**/*.html',
    paths.root + 'index.html',
    paths.assets + '**/*.js',
  ], ['fast', 'sass', 'ngAnnotate', 'browserify-min']);
});

gulp.task('fast', ['clean'], function () {
  gulp.start('browserify');
});

gulp.task('default', ['clean'], function () {
  liveReload = false;
  gulp.start('karma', 'browserify', 'browserify-min', 'e2e');
});
