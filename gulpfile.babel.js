import {createWriteStream} from "fs";
import {spawn} from "child_process";
import gulp from "gulp";
import browserify from "browserify";
import browserifyInc from "browserify-incremental";
import babelify from "babelify";
import rename from "gulp-rename";
import runSequence from "run-sequence";
const debug = process.env.NODE_ENV === "development";
let cocosWebProcess = null;

gulp.task("babel", () => {
  const b = browserify("./lib/app.js", Object.assign({
    debug: true,
    paths: ["./node_modules", "./lib"]
  }, browserifyInc.args));

  // compile ES6/JSX
  b.transform(babelify.configure({
    ignore: /node_modules/,
    stage: 1
  })).on("error", function(error) {
    console.log(`Babel Error: ${error}`);
    this.emit("end");
  });

  // Cache
  browserifyInc(b, {cacheFile: "./.browserify-cache"});

  return b
    .bundle()
    .pipe(createWriteStream("./cocos-app/src/app.js"));
});

gulp.task("cocos-files", () => {
  return gulp.src("./lib/cocos/**/*")
    .pipe(gulp.dest("./cocos-app"));
});

gulp.task("resources", () => {
  return gulp.src("./res/**/*")
    .pipe(gulp.dest("./cocos-app/res"));
});

gulp.task("watch", () => {
  gulp.watch("./lib/**/*.?(js|json)", ["babel"]);
  gulp.watch("./lib/cocos/**/*", ["cocos-files"]);
});

gulp.task("start", () => {
  if(cocosWebProcess) {
    cocosWebProcess.kill();
  }
  cocosWebProcess = spawn("cocos", ["run", "-s", __dirname + "/cocos-app", "-p", "web"], {stdio: "inherit"});
});

gulp.task("build", ["babel", "resources", "cocos-files"]);
gulp.task("default", (callback) => {
  runSequence("watch", "build", "start", callback);
});
