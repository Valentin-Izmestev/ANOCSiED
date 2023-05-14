
// -------------------------------------------------------------------------------------------------
let project_folder = "dist";
let source_folder = "src";
//Объект с путями
let path = {
    //готовый результат
    build:{
        html: project_folder +"/",
        css: project_folder + "/local/templates/educational-portal/assets/css/",
        js: project_folder +"/local/templates/educational-portal/assets/js/",
        img: project_folder +"/local/templates/educational-portal/assets/img/",
        image: project_folder +"/local/templates/educational-portal/assets/image/",
        video: project_folder +"/local/templates/educational-portal/assets/video/",
        fonts: project_folder +"/local/templates/educational-portal/assets/fonts/"
    },
    //исходники
    src:{ 
        html: [source_folder +"/*.html", "!" + source_folder +"/_*.html"],
        scss: source_folder +"/local/templates/educational-portal/assets/scss/style.scss",
        js: source_folder +"/local/templates/educational-portal/assets/js/script.js",
        img: source_folder +"/local/templates/educational-portal/assets/img/**/*.{jpg,png,svg,gif,ico,webp}",
        image: source_folder +"/local/templates/educational-portal/assets/image/**/*.{jpg,png,svg,gif,ico,webp}",
        video: source_folder +"/local/templates/educational-portal/assets/video/**/*.{mp4,ogv,webm}",
        fonts: source_folder + "/local/templates/educational-portal/assets/fonts/**/*.{eot,ttf,woff,woff2,svg}"
    },
    // пути папок за которыми нужно будет следить
    watch:{
        html: source_folder +"/**/*.html",
        scss: source_folder +"/local/templates/educational-portal/assets/scss/**/*.scss",
        js: source_folder +"/local/templates/educational-portal/assets/js/**/*.js",
        img: source_folder +"/local/templates/educational-portal/assets/img/**/*.{jpg,png,svg,gif,ico,webp}",
        image: source_folder +"/local/templates/educational-portal/assets/image/**/*.{jpg,png,svg,gif,ico,webp}",
        video: source_folder +"/local/templates/educational-portal/assets/video/**/*.{mp4,ogv,webm}",
        fonts: source_folder + "/local/templates/educational-portal/assets/fonts/**/*.{eot,ttf,woff,woff2,svg}"
    },
    // путь к папке, которая будет чиститься при сохранении
    clean: "./" + project_folder + "/local/templates/educational-portal/assets/"
}

// -------------------------------------------------------------------------------------------------

// создаем переменные в которые подключаем модули
let {src, dest} = require('gulp'),
gulp = require('gulp'),
browsersync = require("browser-sync").create(),
fileInclude = require("gulp-file-include"),
del = require("del"),
scss = require('gulp-sass')(require('sass')),
autoprefixer = require('gulp-autoprefixer'),
//grouCssMediaQueries = require('gulp-group-css-media-queries'),
cleanCss = require('gulp-clean-css'),
rename = require('gulp-rename'),
uglifyJS = require('gulp-uglify-es').default,
svgSprite = require('gulp-svg-sprite');

const sourcemaps = require('gulp-sourcemaps');



// функция для работы с html файлами.
function html(){
    return src(path.src.html)
        .pipe(fileInclude())
        .pipe(dest(path.build.html))
        .pipe(browsersync.stream()) 
}

// функция для работы с css файлами  
function styles(){
        return src(path.src.scss)  
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(scss({outputStyle: 'expanded'}).on('error', scss.logError)) 
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 5 versions'],
            grid: true,
        }))
        //.pipe(grouCssMediaQueries()) 
        .pipe(dest(path.build.css))
        .pipe(cleanCss())
        .pipe(rename({extname: ".min.css"})) 
        .pipe(sourcemaps.write('./'))
        .pipe(dest(path.build.css))
        .pipe(browsersync.stream()) 
}

function scripts(){
    return src(path.src.js) 
        .pipe(fileInclude())
        .pipe(dest(path.build.js))
        .pipe(uglifyJS())
        .pipe(rename({extname: ".min.js"}))
        .pipe(dest(path.build.js))
        .pipe(browsersync.stream()) 
}
// функция для работы со шрифтами.
function fonts(){
    return src(path.src.fonts) 
        .pipe(dest(path.build.fonts)) 
}

function img(){
    return src(path.src.img)
        .pipe(dest(path.build.img))
        
}
function image(){
    return src(path.src.image)
        .pipe(dest(path.build.image))
        
}
function video(){
    return src(path.src.video)
        .pipe(dest(path.build.video))
        
}
function browserSync(params){
    browsersync.init({
        server: {
            baseDir: "./" + project_folder + "/"
        }, 
        port: 3000,
        notify: false
    });
}

gulp.task('svgSprite', function(){ 
    return gulp.src('src/local/templates/educational-portal/img/for-svg-icon/*.svg')
        .pipe(svgSprite({
            mode:{
                stack:{
                    sprite: '../icon-sprite.svg', // задаем имя svg спрайта и адрес его размещения
                    //example: true  // если стоит этот параметр то в папке, где будет генерироваться svg спрайт, будет создаваться html файл с примерами этих иконок
                }
            }
        }))
        .pipe(dest('src/local/templates/educational-portal/img/'))
});

function watchFiles(params){
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.fonts], fonts);
    gulp.watch([path.watch.scss], styles);
    gulp.watch([path.watch.js], scripts);
    gulp.watch([path.watch.img], img);
    gulp.watch([path.watch.image], image);
    gulp.watch([path.watch.video], video);
}



function clean(){
    return del(path.clean); 
}

let build = gulp.series(clean, gulp.parallel(fonts, styles, scripts, img, image, video, html ));// указываем, какие функции должны выполняться gulp-ом
let watch = gulp.parallel(build, watchFiles, browserSync);//фукции которые будут выполняться при прослушивании

// экспортируем переменные и функции в gulp
exports.html    = html; 
exports.css     = styles;
exports.scripts = scripts;
exports.fonts   = fonts;
exports.img     = img;
exports.image   = image;
exports.video   = video;
exports.build   = build;
exports.watch   = watch;
exports.default = watch;