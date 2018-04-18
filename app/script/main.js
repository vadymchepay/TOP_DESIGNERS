jQuery(document).ready(function () {
    var $listMenu = $('.header__content--menu ul li');
    var $menuItem = $('.header__content--menu ul li a');
    $('.burger__click').click(function () {
        $('.burger').toggleClass('active');
        $('.header__content').toggleClass('menu_open');
        $('.features').toggleClass('menu_open');
        $('.team').toggleClass('menu_open');
        $('.portfolio').toggleClass('menu_open');
        $('.brands').toggleClass('menu_open');
        $('.footer').toggleClass('menu_open');
        if ($('.burger').hasClass('active')) {
            $listMenu.show();
            setTimeout(function () {
                $listMenu.css('opacity', '1');
                $listMenu.css('transform', 'translateY(0px)');
            }, 200);
        }
        else {
            $listMenu.css('opacity', '0');
            $listMenu.css('transform', 'translateY(-40px)');
            setTimeout(function () {
                $listMenu.hide();
            }, 500);
        }
        return false;
    });
    $menuItem.each(function (i, el) {
        $(el).click(function () {
            $('.burger').removeClass('active');
            $('.header__content').removeClass('menu_open');
            $('.features').removeClass('menu_open');
            $('.team').removeClass('menu_open');
            $('.portfolio').removeClass('menu_open');
            $('.brands').removeClass('menu_open');
            $('.footer').removeClass('menu_open');
        })
    })
});