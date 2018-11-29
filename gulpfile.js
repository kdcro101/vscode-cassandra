const gulp = require('gulp');
const ts = require('gulp-typescript');
const jasmine = require('gulp-jasmine');
const clean = require('gulp-clean');
const runSequence = require('run-sequence');
var exec = require('child_process').exec;
var sort = require('gulp-sort');

const merge = require('merge2');

gulp.task('clean', function(next) {
    runSequence('clean:extension', 'clean:webview', next);
});

gulp.task('clean:spec', function() {
    const task1 = gulp.src('out/spec', {
        read: false
    }).pipe(clean());
    return merge(task1);
});
gulp.task('clean:extension', function() {
    const task1 = gulp.src('out', {
        read: false
    }).pipe(clean());
    return merge(task1);
});

gulp.task('clean:webview', function() {
    const task1 = gulp.src('ng', {
        read: false
    }).pipe(clean());
    return merge(task1);
});
gulp.task('build-extension', function(cb) {
    exec('./node_modules/typescript/bin/tsc -p ./', function(err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});
gulp.task('build-webview', function(cb) {
    exec('ng build --prod --aot --build-optimizer --output-hashing none', {
        cwd: "./ngsrc"
    }, function(err, stdout, stderr) {
        cb(err);
    });
});
gulp.task('cassandra-start', function(cb) {
    exec('npm run cassandra-start', {
        // cwd: "./ngsrc"
    }, function(err, stdout, stderr) {
        cb(err);
    });
});
gulp.task('cassandra-stop', function(cb) {
    exec('npm run cassandra-stop', {
        // cwd: "./ngsrc"
    }, function(err, stdout, stderr) {
        cb(err);
    });
});
gulp.task('test:run', function() {
    return gulp.src('out/spec/tests/*.spec.js')
        .pipe(sort({
            asc: true
        }))
        .pipe(jasmine({
            verbose: true,
            config: {
                random: false,
                helpers: [
                    'out/spec/tests/helpers/**/*.js'
                ]
            }
        }))
});
gulp.task('test', [], function(next) {
    runSequence('clean:spec', 'build-extension', 'test:run', next);
});
gulp.task('default', [], function(cb) {
    cb();
});
gulp.task('build', [], function(cb) {
    runSequence('clean', 'build-extension', 'build-webview', cb);
});
