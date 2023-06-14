document.addEventListener('DOMContentLoaded', ready);

function ready() {

    let preloader = document.querySelector('.preloader');
    if(preloader){
        preloader.classList.add('preloader--hide'); 
        setTimeout(function(){
            preloader.remove();
        }, 500);
    }

    // поведение иконки мыши (курсора) BEGIN
    let bat = document.querySelector('.bat');


    document.addEventListener('mousemove', function (e) {
        bat.style.transform = `translate(${e.clientX + 3}px, ${e.clientY + 3}px)`;
    });

    // элементы, при наведении на которые курсор становится оранжевым
    let expertStyleElements = document.querySelectorAll('#header a, .btn--expert, .bat-expert, .form-panel-form a, .form-elem, .swiper-pagination, .scanbox, .sort-select-label, .course-card--expert, .review-card-header__decor-elem, .form-elem-checkbox i, .lg-oute, .my-course--expert .my-course__go-on svg');

    expertStyleElements.forEach(item => {
        item.addEventListener('mouseover', function (e) {
            bat.classList.add('bat--lawyer')
        });
    });
    expertStyleElements.forEach(item => {
        item.addEventListener('mouseout', function (e) {
            bat.classList.remove('bat--lawyer')
        });
    });

    // элементы, при наведении на которые курсор становится синим
    let lawyerStyleElements = document.querySelectorAll('.bat-lawyer');

    lawyerStyleElements.forEach(item => {
        item.addEventListener('mouseover', function (e) {
            bat.classList.add('bat--expert');
        });
    });
    lawyerStyleElements.forEach(item => {
        item.addEventListener('mouseout', function (e) {
            bat.classList.remove('bat--expert')
        });
    });

    // курсор становится белым
    let lightStyleElements = document.querySelectorAll('.bat-light');

    lightStyleElements.forEach(item => {
        item.addEventListener('mouseover', function (e) {
            bat.classList.add('bat--light')
        });
    });
    lightStyleElements.forEach(item => {
        item.addEventListener('mouseout', function (e) {
            bat.classList.remove('bat--light')
        });
    });

    // поведение иконки мыши (курсора) END

    //код отвечающий за добавление svg подчеркивания к нужным ссылкам BEGIN
    function addSvgUnderline(width) {
        let svgUnderline = `<svg width="${width}" height="5" viewBox="0 0 ${width} 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.00385 3.44288C1.20307 -0.198467 ${width / 2} 0.432916 ${width} 4C37.468 2.87208 31.294 2.31072 17.1216 2.867C1.88767 2.18918 0.925986 4.86608 1.00385 3.44288Z" fill="#3449B7" stroke="#3449B7" stroke-width="0.5"/>
        </svg>`;
        return svgUnderline;
    }

    let arMenuLinks = document.querySelectorAll('.main-menu a');
    let nlLinkFromMyCourseFooterText = document.querySelectorAll('.my-course__footer-text a');

    arMenuLinks.forEach(item => {
        item.insertAdjacentHTML('beforeEnd', addSvgUnderline(item.offsetWidth));
    });
    nlLinkFromMyCourseFooterText.forEach(item => {
        item.insertAdjacentHTML('beforeEnd', addSvgUnderline(item.offsetWidth));
    });
    //код отвечающий за добавление svg подчеркивания к нужным ссылкам  --END


    let recomendationsSl = document.querySelector('.recomendations-slider');
    if (recomendationsSl) {
        const swiper = new Swiper(recomendationsSl, {
            // Optional parameters 
            loop: true,
            slidesPerView: 1,
            loop: false,
            speed: 1000,
            loopAdditionalSlides: 1,
            slidesPerGroup: 1,
            watchOverflow: false,
            spaceBetween: 0,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            // If we need pagination
            pagination: {
                el: '.recomendations-slider__conrtol-panel .swiper-pagination',
                clickable: true,
            }, 
            // Navigation arrows
            navigation: {
                nextEl: '.recomendations-slider__conrtol-panel .swiper-button-next',
                prevEl: '.recomendations-slider__conrtol-panel .swiper-button-prev',
            }

        });
    }


    let studentReviewsSlider = document.querySelector('.student-reviews-sl');
    if (studentReviewsSlider) {
        const studentReviewsSl = new Swiper(studentReviewsSlider, {
            // Optional parameters 
            loop: true,
            slidesPerView: 2,
            loop: true,
            speed: 1000,
            loopAdditionalSlides: 2,
            slidesPerGroup: 1,
            spaceBetween: 40,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            // If we need pagination
            pagination: {
                el: '.student-reviews-sl__conrtol-panel .swiper-pagination',
                clickable: true,
            },

            // Navigation arrows
            navigation: {
                nextEl: '.student-reviews-sl__conrtol-panel .swiper-button-next',
                prevEl: '.student-reviews-sl__conrtol-panel .swiper-button-prev',
            },
            breakpoints: {
                200: {
                    spaceBetween: 20,
                    slidesPerView: 2,
                },
                1000: {
                    spaceBetween: 20,
                    slidesPerView: 2,
                },
                1300: {
                    spaceBetween: 40,
                    slidesPerView: 2,
                }
            }

        });
    }

    let reviewsSlider = document.querySelector('.reviews-slider');
    if (reviewsSlider) {
        const swiper = new Swiper(reviewsSlider, {
            // Optional parameters 
            loop: true,
            slidesPerView: 3,
            loop: true,
            speed: 1000,
            loopAdditionalSlides: 3,
            slidesPerGroup: 1,
            spaceBetween: 40,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            // If we need pagination
            pagination: {
                el: '.reviews-slider__conrtol-panel .swiper-pagination',
                clickable: true,
            },

            // Navigation arrows
            navigation: {
                nextEl: '.reviews-slider__conrtol-panel .swiper-button-next',
                prevEl: '.reviews-slider__conrtol-panel .swiper-button-prev',
            },
            breakpoints: {
                200: {
                    spaceBetween: 20,
                    slidesPerView: 2,
                },
                1000: {
                    spaceBetween: 20,
                    slidesPerView: 3,
                },
                1300: {
                    spaceBetween: 40,
                    slidesPerView: 3,
                }
            }

        });
    }

    let scanSlider = document.querySelector('.scan-slider');
    if (scanSlider) {
        const swiper = new Swiper(scanSlider, {
            // Optional parameters 
            loop: true,
            slidesPerView: 2,
            loop: true,
            speed: 1000,
            loopAdditionalSlides: 2,
            slidesPerGroup: 1,
            spaceBetween: 30,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.scan-slider__conrtol-panel .swiper-pagination',
                clickable: true,
            },

            // Navigation arrows
            navigation: {
                nextEl: '.scan-slider__conrtol-panel .swiper-button-next',
                prevEl: '.scan-slider__conrtol-panel .swiper-button-prev',
            },
            breakpoints: {
                200: {
                    spaceBetween: 10,
                    slidesPerView: 2,
                    loopAdditionalSlides: 2,
                },
                350: {
                    spaceBetween: 10,
                    slidesPerView: 3,
                    loopAdditionalSlides: 3,
                },
                500: {
                    spaceBetween: 20,
                    slidesPerView: 3,
                    loopAdditionalSlides: 3,
                },
                1100: {
                    spaceBetween: 40,
                    slidesPerView: 2,
                }
            }

        });
    }

    let arSsortSelect = document.querySelectorAll('.sort-select');
    if (arSsortSelect) {
        arSsortSelect.forEach(item => {
            let currentSelect = new Choices(item, {
                placeholder: false,
                placeholderValue: '',
                searchEnabled: false,
                shouldSort: false,
                itemSelectText: '',
                position: 'bottom'
            });

            item.addEventListener('change', function(e){  
                if(currentSelect.getValue(true) == 'sort=name'){ 
                    let search = (document.location.pathname)?document.location.pathname : '';
                    window.location.href = window.location.pathname + '?' + currentSelect.getValue(true)
                }else if(currentSelect.getValue(true) == 'sort=date'){  
                    window.location.href = window.location.pathname + '?' + currentSelect.getValue(true);
                } 
            });  
        });
    }

    // обработка наведения на карточки авторов курса
    let autoTrigger = document.querySelectorAll('.author__trigger');
    let autoCard = document.querySelectorAll('.author');

    if (autoCard) {
        autoTrigger.forEach(item => {
            item.addEventListener('mouseover', function (e) {
                let descr = this.parentElement.querySelector('.author__description');
                descr.style.display = 'block';
                let descrHeight = descr.offsetHeight;
                descr.style.height = 0;
                setTimeout(function () {
                    descr.style.height = descrHeight + 'px';
                }, 50);
            });
            item.addEventListener('mouseout', function (e) {
                let descr = this.parentElement.querySelector('.author__description');
                descr.style.height = 0;
                setTimeout(function () {
                    descr.removeAttribute('style');
                }, 200);
            });
        });
    }

    // равзорачивание отзыва
    let nlShowCommentBtn = document.querySelectorAll('.review-card__show-comment-btn');
    if (nlShowCommentBtn) {
        nlShowCommentBtn.forEach(btn => {
            btn.addEventListener('click', function (e) {
                e.preventDefault();
                let comment = this.previousElementSibling;
                let commentHeight = comment.offsetHeight;
                comment.style.height = 'auto';
                let commentFullHeight = comment.offsetHeight;
                comment.style.height = commentHeight + 'px';

                btn.remove();
                setTimeout(function () {
                    comment.style.height = commentFullHeight + 'px';
                    setTimeout(function () {
                        comment.style.height = 'auto';
                    }, 300);
                }, 50);


            });
        });
    }

    // показывание и скрывание пароля
    let nlTogglePasswordBtn = document.querySelectorAll('.toggle-password-btn');
    if (nlTogglePasswordBtn) {
        nlTogglePasswordBtn.forEach(item => {
            item.addEventListener('click', function () {
                let passInput = this.closest('.form-elem').querySelector('.form-elem__input');
                if (this.classList.contains('show-password')) {
                    this.classList.remove('show-password');
                    passInput.setAttribute('type', 'password');
                } else {
                    this.classList.add('show-password');
                    passInput.setAttribute('type', 'text');
                }
            });
        });
    }

 

    // Плавная прокрутка страницы при клике на яконую ссылку

    let nlAnchorLinks = document.querySelectorAll('.anchor-menu a, .anchor-link');
    nlAnchorLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            let destination = document.querySelector(e.currentTarget.getAttribute('href'));
            if (destination) {
                destination.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // поведение тултипа в столбчатом графике виджета прогресса прохождения курса
    let nlAssingScopeBox = document.querySelectorAll('.progress-widget__passing-score');
    if (nlAssingScopeBox) {
        nlAssingScopeBox.forEach(item => {
            item.addEventListener('mouseover', function (e) {
                item.classList.add('big-z');
                let tooltyp = item.querySelector('.passing-score-tooltip');
                let tooltypWidth = tooltyp.getBoundingClientRect().width;
                let maxLeft = item.getBoundingClientRect().width - tooltypWidth;

                if ((e.clientX - item.getBoundingClientRect().left) > maxLeft) {
                    tooltyp.style.left = (maxLeft - 50) + 'px';
                } else {
                    tooltyp.style.left = (e.clientX - item.getBoundingClientRect().left) - 15 + 'px';
                }

            });
            item.addEventListener('mouseout', function (e) {
                item.classList.remove('big-z');
            });
        });
    }

    //поведение тега video в большом контейнере для видеороликов
    let videoPlayBtn = document.querySelectorAll('.play-btn');
    if (videoPlayBtn) {
        videoPlayBtn.forEach(btn => {
            btn.addEventListener('click', function (e) {
                this.closest('.great-video-box').classList.add('great-video-box--play');
                let currentVideo = this.previousElementSibling;
                currentVideo.setAttribute('controls', 'controls');
                currentVideo.play();
            });
        });
    }

    //подгрузка файлов
    let uploadFileForm = document.querySelectorAll('.upload-file-form');
    let arFromObjects = [];
    if(uploadFileForm){
        uploadFileForm.forEach(form=>{
            arFromObjects.push(new FileUploader(form));
        })
    }
    arFromObjects.forEach(obj=>{
        obj.init();
    }); 

    // скрытие пройденных модулей
    
    let elemToggleCompliteModule = document.querySelector('.js__toggle-complite-module input');
    
    if(localStorage.getItem('lessonSpoiler') == 'true'){
        if(elemToggleCompliteModule){
            elemToggleCompliteModule.checked = true;
            hideCompliteModule();
        }
    }
    function hideCompliteModule(){
        let complitedModule = document.querySelectorAll('.lesson-spoiler--completed');
        console.log(complitedModule)
        if(complitedModule.length > 0){
            complitedModule.forEach(item=>{
                console.log(item)
                item.style.display = 'none';
            });
        }  
    }
    function showCompliteModule(){
        let complitedModule = document.querySelectorAll('.lesson-spoiler--completed');
 
        if(complitedModule.length > 0){
            complitedModule.forEach(item=>{
                console.log(item)
                item.style.display = 'block';
            });
        }  
    } 
    function toggleCompliteModule(){  
        switch (localStorage.getItem('lessonSpoiler') ) {
            case null:
                localStorage.setItem('lessonSpoiler', true); 
                hideCompliteModule();
                break;
            case 'false':
                localStorage.setItem('lessonSpoiler', true); 
                hideCompliteModule()
                break;
            case 'true':
                localStorage.setItem('lessonSpoiler', false); 
                showCompliteModule()
                break; 
          }
    }

    if(elemToggleCompliteModule){
        elemToggleCompliteModule.addEventListener('change', function(e){
            console.log('gogogo')
            toggleCompliteModule()
        });
    }
    
    // Автоматическая высота textarea
    var tx = document.querySelectorAll('.textarea--auto-height');//РАСТЯГИВАЕМ_textarea 
    for (var i = 0; i < tx.length; i++) { 
        tx[i].setAttribute('style', 'height:' + (tx[i].scrollHeight) + 'px;overflow-y:hidden;'); 
        tx[i].addEventListener("input", OnInput, false); 
    } 
    function OnInput() { 
        this.style.height = 'auto'; 
        this.style.height = (this.scrollHeight) + 'px'; 
    }
     
    // плагин выпадающего списка
    let arFormCategory = [];
    let formCategorySelects = document.querySelectorAll('.form-elem-select__item');
    if (formCategorySelects.length > 0) {
        formCategorySelects.forEach(select => {
            let currentSelect;
            if (select.classList.contains('form-elem-select__item--no-search')) {
                currentSelect = new Choices(select, {
                    noResultsText: 'Значение не найдено',
                    loadingText: 'Загрузка...',
                    placeholder: false, 
                    searchEnabled: false,
                });
            } else {
                currentSelect = new Choices(select, {
                    noResultsText: 'Значение не найдено',
                    loadingText: 'Загрузка...',
                    placeholder: false, 
                    searchPlaceholderValue: 'Введите искомое значение',
                });
            }
            arFormCategory.push(currentSelect);

            select.addEventListener('change', function () { 
                if (this.value != '') {
                    this.closest('.form-elem-select').classList.add('form-elem--active');

                    if (this.classList.contains('form__category-select--for-tab')) {
                        let thisSelect = this;
                        let currentForm = thisSelect.closest('.form-creating-petitions');
                        let formTabContainers = currentForm.querySelectorAll('.form-creating-petitions__container');
                        let formSubmit = currentForm.querySelector('.btn[type="submit"]');
                        formSubmit.removeAttribute('disabled');
                        formTabContainers.forEach(container => {
                            if (container.getAttribute('id') === thisSelect.firstElementChild.getAttribute('value')) {
                                container.style.display = 'block';
                            } else {
                                container.removeAttribute('style');
                            }
                        });
                    }

                }
            });

        });
    }


    // Рейтинг
    let nlStarRating = document.querySelectorAll('.star-rating'); 
    if(nlStarRating){
        nlStarRating.forEach(item=>{
            let starRating = new StarRating(item);
            starRating.init();
        });
    }
    
    // Сортировка на ссылках
    let nlSortLinkList = document.querySelectorAll('.sort-link-list');
    if(nlSortLinkList.length > 0){
        nlSortLinkList.forEach(item=>{  
            let btn = item.querySelector('.sort-link-list__value');
            let links = item.querySelectorAll('.sort-link-list__values a'); 
            btn.addEventListener('click', function(){
                 this.parentElement.classList.toggle('active');
            });
            links.forEach(link=>{
                link.addEventListener('mouseover', function(e){
                    links.forEach(item=>{
                        item.classList.remove('active');
                    });
                    this.classList.add('active');
                });
            });
        });
    } 
    // закрытие выпадающего списка при клике вне его
    document.addEventListener('click', function(e){
        let nlSortLinkList = document.querySelectorAll('.sort-link-list');
        if(nlSortLinkList.length > 0){ 
            if(!(e.target.classList.contains('sort-link-list') || e.target.closest('.sort-link-list'))){
                nlSortLinkList.forEach(sortItem=>{
                    sortItem.classList.remove('active');
                });
            }
        }
    });
    
}