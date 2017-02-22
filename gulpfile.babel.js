/**
 * Imported modules
 */
import gulp from 'gulp';
import autoprefixer from 'gulp-autoprefixer';
import bs from 'browser-sync';
import minifyCss from 'gulp-clean-css';
import imagemin from 'gulp-imagemin';
import minifyJs from 'gulp-minify';
import babel from 'gulp-babel';
import rename from 'gulp-rename';
import plumber from 'gulp-plumber';
import watch from 'gulp-watch';
import merge from 'merge-stream';
import del from 'del';

/**
 * Variables
 */
const browsersync = bs.create();


/**
 * Styles Task
 */
gulp.task("styles", () => {
  return watch('src/assets/css/stylesheets/*.css')
    .pipe(plumber())
    .pipe(autoprefixer())
    .pipe(minifyCss())
    .pipe(gulp.dest('public/assets/css'))
    .pipe(browsersync.reload({stream: true}));
});

/**
 * Images Task
 */
gulp.task('images', () => {
  return watch('src/assets/img/**/*', () => {
    del(["public/assets/img"]).then(paths => {
      console.log('Deleted files and folder:=\n', paths.join('\n'));
    });
    gulp.src('src/assets/img/**/*')
      .pipe(imagemin({
        progressive: true
      }))
      .pipe(plumber())
      .pipe(gulp.dest('public/assets/img'))
      .pipe(browsersync.reload({stream: true}));
  });
});

/**
 * Scripts Task
 */
gulp.task('scripts', () => {
  return watch('src/assets/js/*.js')
    .pipe(plumber())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(rename({
      extname: '.js'
    }))
    .pipe(minifyJs({
      ext:{
        min:'.js'
      },
      noSource: false
    }))
    .pipe(gulp.dest('public/assets/js'))
    .pipe(browsersync.reload({stream: true}));
});

/**
 * Html Task
 */
gulp.task('html', () => {
  return watch('src/*.*')
    .pipe(plumber())
    .pipe(gulp.dest('public'))
    .pipe(browsersync.reload({stream: true}));
});

/**
 * Fonts Task
 */
gulp.task('fonts', () => {
  return watch('src/assets/fonts/*', () => {
    gulp.src('src/assets/fonts/*')
      .pipe(plumber())
      .pipe(gulp.dest('public/assets/fonts'))
      .pipe(browsersync.reload({stream: true}));
  });
});


/**
 * Remove the public folder
 */
gulp.task("rmBuild", () => {
  return del([
    "public"
  ]);
});

/**
 * Build a new public folder
 */
gulp.task("build", ['rmBuild'], () => {
  return gulp.src([
    'src/**/*.*'
  ])
    .pipe(plumber())
    .pipe(gulp.dest('public'));
});

/**
 * Replace all dev files with production files
 */
gulp.task("cleanBuild", ["build"], () => {
  del([
    "public/assets/css/sass",
    "public/assets/css/stylesheets",
    "public/assets/css/config.rb",
    "public/assets/js/main.js",
    "public/assets/img"
  ]);
  const scriptTask = gulp.src('src/assets/js/*.js')
    .pipe(plumber())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(rename({
      extname: '.js'
    }))
    .pipe(minifyJs({
      ext:{
        min:'.js'
      },
      noSource: false
    }))
    .pipe(gulp.dest('public/assets/js'));

    const styleTask = gulp.src('src/assets/css/stylesheets/*.css')
      .pipe(plumber())
      .pipe(autoprefixer())
      .pipe(minifyCss())
      .pipe(gulp.dest('public/assets/css'));

    const imageTask = gulp.src('src/assets/img/**/*')
      .pipe(imagemin({
        progressive: true
      }))
      .pipe(plumber())
      .pipe(gulp.dest('public/assets/img'));

    return merge(scriptTask, styleTask, imageTask);
});

/**
 * Browser-Sync Task
 */
gulp.task('browser-sync', () => {
  browsersync.init({
    server: {
      baseDir: "./public/"
    }
  });


});

gulp.task('default', ["styles", "scripts", "images", "html", "fonts", "browser-sync"])
