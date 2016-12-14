var gulp = require( "gulp" ),
    connect = require( "gulp-connect" );


gulp.task( "connect", function() {
    connect.server( {
        root: "./",
        livereload: true
    });
});

gulp.task( "reload", function() {
    gulp.src( [ "./*.html", "./js/*.js" ] )
        .pipe( connect.reload() );
});

gulp.task( "watch", function() {
    gulp.watch( [ "./*.html", "./js/**.js" ], [ "reload" ] );
});

gulp.task( "local", [ "connect", "watch" ] );