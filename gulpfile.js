var gulp = require ('gulp'),
    imagemin = require('gulp-imagemin'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    htmlReplace = require('gulp-html-replace'),
    uglify = require('gulp-uglify'),
    usemin = require('gulp-usemin'), /*minificação de imagens, plugin do gulp*/
    cssmin = require('gulp-cssmin'),
    browserSync = require('browser-sync'),
    jshint = require('gulp-jshint'),
    jshintStylish = require('jshint-stylish'),
    csslint = require('gulp-csslint'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    bulkSass = require('gulp-sass-bulk-import'),
    inject = require('gulp-inject');

/*Configuramos uma tarefa, mas não é nossa tarefa padrão, muito menos tem um nome. 
No Gulp, precisamos executar nosso código através de tarefas e toda tarefa possui 
um nome. É por isso que usamos a função gulp.task para criar tarefas.

É através do método .pipe (tubo) que ligamos fluxos, seja ele de leitura ou escrita. 
Ele recebe como parâmetro outro fluxo que desejamos nos conectar. Vamos ligar o 
fluxo de leitura ao imagemin e este último ao fluxo de escrita

O método gulp.task recebe como primeiro parâmetro o nome da nossa tarefa e como segundo uma função que será executada assim que a tarefa foi chamada através do Gulp no terminal. Para chamá-la, usamos npm run gulp NomeDaTarefa.

*/ 

gulp.task('default', ['copy'], function(){
    gulp.start('build-img', 'usemin');
});

gulp.task('copy', ['clean'], function() {
     return gulp.src('src/**/*')
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', function() {
    var stream = gulp.src('dist')    
        .pipe(clean());
    return stream; /*usa o return STREAM(fluxo) para avisar ao copy que ele só pode rodar                   quando o clean terminar, a mesma coisa vale pro copy em relação ao
                     build-img*/
});

gulp.task('build-img', function () {
    gulp.src('dist/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("src/scss/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("src/css/"))
        .pipe(browserSync.stream());

});



gulp.task('usemin', function(){
    gulp.src('dist/**/*.html')
        .pipe(usemin({ //assim como o htmlReplace, o usemin utiliza comentarios no html
            'js': [uglify],
            'css': [autoprefixer, cssmin]
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('server', function(){
    browserSync.init({
        server: {
            baseDir: 'src'
        }
    });   
    
    // gulp.watch('src/scss/**/*.scss').on('change', function(event) {
    //    gulp.src(event.path)
    //         .pipe(sass().on('error', function(erro) {
    //           console.log('SASS, erro compilação: ' + erro.filename);
    //           console.log(erro.message);
    //         }))
    //         .pipe(gulp.dest('src/css'));
            
    // });  
    gulp.watch("src/scss/**/*.scss", ['sass']);
    gulp.watch('src/js/*.js').on('change', function(event){
        gulp.src(event.path)
            .pipe(jshint())
            .pipe(jshint.reporter(jshintStylish));
    }); 

    gulp.watch('src/css/*.css').on('change', function(event){
        gulp.src(event.path)
            .pipe(csslint())
            .pipe(csslint.reporter());
    });



    gulp.watch('src/**/*').on('change', browserSync.reload);
});

