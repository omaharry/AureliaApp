var gulp = require('gulp'),
    ts = require('gulp-typescript'),
    merge = require('merge'),
    flatten = require('gulp-flatten');
 
var webroot = "wwwroot";
 
var paths = {
    tsSource: './AureliaLogic/**/*.ts',
    tsOutput: "./" + webroot,
    tsDef: "./typings/",
    importedTypings: "./" + webroot + "/jspm_packages/**/*.d.ts"
};
 
var tsCompilerConfig = ts.createProject('tsconfig.json');
 
gulp.task('ts-compile', function () {
    var tsResult = gulp.src(paths.tsSource)
        .pipe(ts(tsCompilerConfig));
 
    return merge([
        tsResult.dts.pipe(gulp.dest(paths.tsDef)),
        tsResult.js.pipe(gulp.dest(paths.tsOutput))
    ]);
});
 
//gulp.task('default');
gulp.task('watch', ['ts-compile'], function () {
    gulp.watch(paths.tsSource, ['ts-compile']);
});

gulp.task('copy-defs', function () {
    gulp.src(paths.importedTypings)
        .pipe(flatten())
        .pipe(gulp.dest(paths.tsDef + "/jspmImports/"));
});