'use strict';

module.exports = function() {
  var YOUR_LOCALS = './data/content.json';
  var SLIDER = './data/index/slider.json';

  $.gulp.task('pug', function() {
    return $.gulp.src(['./source/template/**/*.pug', '!./source/template/**/_*.pug'])
      .pipe($.gp.pug({ 
        locals: {
           nav: JSON.parse($.fs.readFileSync(YOUR_LOCALS, 'utf-8')),
           slider: JSON.parse($.fs.readFileSync(SLIDER, 'utf-8'))
          },
        // locals: YOUR_LOCALS,
        pretty: true }))
      .on('error', $.gp.notify.onError(function(error) {
        return {
          title: 'Pug',
          message:  error.message
        }
       }))
      .pipe($.gulp.dest($.config.root));
  });
};
