// valida los archivos js
// 
//  npm install --save-dev jshint gulp-jshint

var notify = require('gulp-notify'),
    jshint = require('gulp-jshint');


 gulp.task('jsvalidate', function(){
  	  return gulp.src('app/source/js/*.js')
  	  .pipe(jshint())
  	  .pipe(jshint.reporter("default"))
  	  .pipe(notify({ message: 'jsvalidate task complete'})); 
  	 
  });

  gulp.task('default',['jsvalidate'];