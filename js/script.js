$(document).ready(function () {
  $('html').css('overflow', 'hidden');

  let modalWrap = $('.modal-wrap');
  let modalClose = $('.modal-close');
  let modalOpen = $('.modalopen');
  let modalCloseFn = () => {
    modalWrap.stop().fadeOut(200);
    $('html').css('overflow', 'auto');
    modalOpen.show();
  }

  modalOpen.hide();
  modalClose.click(function () {
    modalCloseFn();
  });
  $('html').keydown(function (key) {
    if (key.keyCode) {
      modalCloseFn();
    }
  });

  let modalMain = $('.modal-main');
  modalMain.click(function (event) {
    event.stopPropagation();
  });
  modalWrap.click(function () {
    modalCloseFn();
  });

  modalOpen.click(function(){
    modalWrap.stop().fadeIn(200);
    $('html').css('overflow', 'hidden');
    modalOpen.hide();
  });

  let header = $('.header');
  let header_top = $('.header-top');

  let header_main = $('.header-main');
  let gnb = $('.gnb');
  gnb.mouseenter(function () {
    header_main.addClass('header-main-show');
  });
  gnb.mouseleave(function () {
    header_main.removeClass('header-main-show');
  });


  $(window).scroll(function () {
    let temp = $(window).scrollTop();
    if (temp > 0) {
      header.addClass('header-fix');
      header_top.addClass('header-top-close');
    } else {
      header.removeClass('header-fix');
      header_top.removeClass('header-top-close');
    }

  });

  let mb_mainmenu = $('.mb-menu > li > a');
  let mb_submenu = $('.mb-submenu');

  $.each(mb_mainmenu, function(index){
    $(this).click(function(event){
      event.preventDefault();
      let temp = $(this).hasClass('mb-menu-focus');
      if(temp) {
        $(this).removeClass('mb-menu-focus');
        $(this).removeClass('mb-icon-rot');
        mb_submenu.eq(index).hide();
      }else{
        mb_submenu.hide();
        mb_mainmenu.removeClass('mb-menu-focus');
        mb_mainmenu.removeClass('mb-icon-rot');
        $(this).addClass('mb-menu-focus');
        $(this).addClass('mb-icon-rot');
        mb_submenu.eq(index).show();
      }

    });
  });

  let mb_dim = $('.mb-dim'); 
  let mb_bt = $('.mb-bt');
  mb_bt.click(function(event){
    event.preventDefault();
    mb_dim.show();
    mb_wrap.addClass('mb-wrap-open')
  });

  let mb_close = $('.mb-close');
  let mb_wrap = $('.mb-wrap');
  mb_close.click(function(event){
    event.preventDefault();
    
    mb_dim.hide();
    mb_mainmenu.removeClass('mb-menu-focus');
    mb_submenu.hide();
    mb_wrap.removeClass('mb-wrap-open');
  });

  $(window).resize(function(){
    let temp = $(window).width();
    if(temp > 760) {
      mb_dim.hide();
      mb_wrap.removeClass('mb-wrap-open');
      mb_mainmenu.removeClass('mb-menu-focus');
      mb_mainmenu.removeClass('mb-icon-rot');
      mb_submenu.hide();
    }
  });

  let go_top = $('.gotop');
  go_top.click(function(){
    $('html').animate({
      scrollTop: 0
    }, 1000);
  });

});

window.onload = function () {
  new Swiper('.sw-visual', {
    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    speed: 1000,
    navigation: {
      prevEl: '.sw-visual-prev',
      nextEl: '.sw-visual-next'
    }
  });

  new Swiper('.sw-items', {
    loop: true,
    speed: 800,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    navigation: {
      prevEl: '.sw-items-prev',
      nextEl: '.sw-items-next'
    },
    pagination: {
      el: '.sw-items-pg'
    }
  });

  new Swiper('.sw-bevarage', {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    navigation: {
      prevEl: '.sw-bevarage-prev',
      nextEl: '.sw-bevarage-next'
    },
    pagination: {
      el: '.sw-bevarage-pg'
    }
  });
}