const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

const browserSyncJob = () => {
  browserSync.init({
    server: 'app/'
  });

  watch('app/sass/*.scss', buildSass);
  watch('app/*.html').on('change', browserSync.reload);
};

const buildSass = () => {
  console.log('Компиляция Sass');

  return src('app/sass/*.scss')
    .pipe(sass())
    .pipe(dest('app/css'))
    .pipe(browserSync.stream());
};

exports.server = browserSyncJob;
exports.build = buildSass;