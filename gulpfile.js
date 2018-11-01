const gulp = require('gulp');
const ts = require('gulp-typescript');
const jasmine = require('gulp-jasmine');
const clean = require('gulp-clean');
const runSequence = require('run-sequence');
var exec = require('child_process').exec;

const merge = require('merge2');

gulp.task('clean', function() {
    const task1 = gulp.src('out', {
        read: false
    }).pipe(clean());
    const task2 = gulp.src('ng', {
        read: false
    }).pipe(clean());

    return merge(task1, task2);
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
gulp.task('test:run', function() {
    return gulp.src('out/spec/*.spec.js')
        .pipe(jasmine())
});
gulp.task('test', [], function(next) {
    // runSequence('clean', 'build-type-definitions', 'build-project', 'build-bundle', 'test:run', next);
});
gulp.task('default', [], function(cb) {
    cb();
});
gulp.task('build', [], function(cb) {
    runSequence('clean', 'build-extension', 'build-webview', cb);
});
