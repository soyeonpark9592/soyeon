$(function () {

    //animation

    $(".ingri1").waypoint(function () {
        $(".ingri1").addClass("animated fadeInUp");
    }, {
        offset: '75%'
    });

    $(".ingri2").waypoint(function () {
        $(".ingri2").addClass("animated fadeInUp");
    }, {
        offset: '75%'
    });

    $(".ingri3").waypoint(function () {
        $(".ingri3").addClass("animated fadeInUp");
    }, {
        offset: '75%'
    });

    $(".ingri4").waypoint(function () {
        $(".ingri4").addClass("animated fadeInUp");
    }, {
        offset: '75%'
    });

    $(".ingri5").waypoint(function () {
        $(".ingri5").addClass("animated fadeInUp");
    }, {
        offset: '75%'
    });


    $(".r-box").waypoint(function () {
        $(".r-box").addClass("animated fadeInLeft");
    }, {
        offset: '75%'
    });

    $(".r-img").waypoint(function () {
        $(".r-img").addClass("animated fadeInLeft");
    }, {
        offset: '75%'
    });


    $(".brandlogo").waypoint(function () {
        $(".brandlogo").addClass("animated fadeInUp");
    }, {
        offset: '75%'
    });



    // $(".basket").click(function () {
    //     var wbasket = $(this).children().attr("src");

    //     if (wbasket == "img/basket.png") {
    //         $(".basket>img").attr("src", "img/basket.png");
    //         $(this).children().attr("src", "img/wbasket.png");
    //         $(".basket").css({
    //             "background": "#eaeaea"
    //         });
    //         $(this).css({
    //             "background": "#2a3f47"
    //         });
    //     } else {
    //         $(this).children().attr("src", "img/basket.png");
    //         $(".basket").css({
    //             "background": "#eaeaea"
    //         });
    //         $(this).css({
    //             "background": "#eaeaea"
    //         });
    //     }
    //     return false;

    $(".basket").click(function () {
        var wbasket = $(this).children().attr("src");

        if (wbasket =="img/basket.png") {
            $(".basket>img").attr("src","img/basket.png");
            $(this).children().attr("src", "img/wg-basket.png");

        } else {
            $(this).children().attr("src", "img/basket.png");

        }
        return false;


    });

    $(".l-text-box").mouseover(function () {
        $(".text-line").removeClass('on');
        $(this).find('.text-line').addClass('on');
    })


    $(".l-text-box").mouseleave(function () {
        $(".text-line").removeClass('on');
    });

    //menu

    $(".menuwidth>li").mouseover(function () {
        $(".background").stop().slideDown(500);
        $(".sub").stop().slideDown(500);
    });

    $(".subbox .1depth").mouseover(function () {
        $(".2depth").hide();
        $(this).find(".2depth").show();
    });

    $(".allmenu").mouseleave(function () {
        $(".background").stop().slideUp(500);
        $(".sub").stop().slideUp(500);
    });

    $(".2depth>li").mouseover(function () {
        $(".2depth>li>a").removeClass('on');
        $(this).find("a").addClass("on");
    });


    //top버튼 기능
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('.topbtn').fadeIn();
        } else {
            $('.topbtn').fadeOut();
        }
    });

    //top아이콘 클릭시 부드럽게 이동
    $(".topbtn").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, "slow")
        return false
    });


})