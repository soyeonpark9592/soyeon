// const ham = document.querySelector("#button");
// const mn = document.querySelector("#menu");
// const x = document.querySelector(".x")

// ham.addEventListener("click",function(){
//     mn.style.left="0"
// }
// )

// x.addEventListener("click",function(){
//     mn.style.left="-100%"
// })

// const down = document.querySelectorAll(".down");
// const up = document.querySelectorAll(".up");
// const sub = document.querySelectorAll(".sub1");

// for (let i=0; i<down.length; i++){
//     down[i].addEventListener("click",function(){
//         sub[i].style.display="block"
//         down[i].style.display="none"
//         up[i].style.display="block"
//     })

//     up[i].addEventListener("click",function(){
//         sub[i].style.display="none"
//         up[i].style.display="none"
//         down[i].style.display="block"

//     })



// }

$(function () {

    $(".ban").slick({
        dots: true,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    });


    $(".foot3 span").click(function () {
        $(this).parent().next().stop().slideToggle(800);
    });


    $(".hamburger").click(function () {
        $("#menu").toggleClass('open');
        $("body").toggleClass('open');

    });

    $(".x").click(function () {
        $("#menu").animate({
            marginLeft: 0
        }, 600);
    });


    $(".mm>li>a").click(function () {
        if ($(this).next().is(":visible")) {
            $(this).next().stop().slideUp(500);
            $(this).children(".down").removeClass("open");

        } else {
            $(".sub1").stop().slideUp(500);
            $(".down").removeClass('open');
            $(this).next().stop().slideDown(500);
            $(this).children(".down").addClass("open");
        };

    });


    // $("#roll a").bind('click',function(e){
    //     $("#roll a").removeClass('on');
    //     $(this).addClass('on');
    //     $("#slide img").attr("src",$(this).attr("href"));
    //     e.preventDefault();
    // });



    // let btnNum=0;
    // setInterval(function(){
    //     btnNum++;
    //     if(btnNum>3) btnNum=0;
    //     $("#roll a").eq(btnNum).trigger("click");
    //     //trigger 강제로 이벤트 실행시킴
    // },3000, 'easeOutSine');



    // 최하단 사진 효과
    $(".a1").waypoint(function () {
        $(".a1").addClass("animated fadeInLeft");
    }, {
        offset: '75%'
    });

    $(".a2").waypoint(function () {
        $(".a2").addClass("animated fadeInLeft");
    }, {
        offset: '75%'
    });



    $(".basket>img").click(function(){

        var wbasket=$(this).attr("src");

        if(wbasket=="img/basket.png"){

        $(this).attr("src","img/basket-orange.png");
    }
        else{ $(this).attr("src","img/basket.png");}

        return false;

    });




});