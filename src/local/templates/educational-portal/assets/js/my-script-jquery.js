$(function(){
    let $menuSpoilerBtn = $('.main-menu-item__head .menu-link-arrow');
    $menuSpoilerBtn.on('click', function(){
        if($(window).width() <= 1280){
            $(this)
            let mmiHeader = $(this).parent('.main-menu-item__head');
            let subMenu = mmiHeader.next();
            mmiHeader.toggleClass('main-menu-item__head--open')
            subMenu.slideToggle(200); 
        }
        
    });

    // открытие и закрытие основного меню в мобильной версии
    let $burgerBtn = $('.btn-burger');
    $burgerBtn.on('click', function(){
        $('body').toggleClass('open-main-menu');
    })
    

    let footerMenuItemBtn = $('.footer-menu-item__arrow');
    footerMenuItemBtn.on('click', function(e){
        $(this).parent().toggleClass('footer-menu-item__header--open')
        $(this).parent().next('.footer-menu-item__body').slideToggle(200);
    });


    // работа спойлеров
    let $spoilerBtn = $('.spoiler__header');
    let $spoilerBody = $('.spoiler__body');
 
    if($spoilerBtn.length > 0){ 
        $spoilerBtn.on('click', function(e){
            e.preventDefault(); 
            $(this).toggleClass('spoiler-open');
            $(this).next().slideToggle(200); 
        });
    }

    // подключаю маски
  
        $(".phone-mask").mask("+7 (999) 999-99-99"); 
 
      
    let LightGalleryList = document.querySelectorAll('.lg-gallery');
    LightGalleryList.forEach(gallery => {
        lightGallery(gallery);
    });
 
});