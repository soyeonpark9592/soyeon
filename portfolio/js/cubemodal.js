$(function () {

  function modalOn() {
    $(".myswiper .modal_back").addClass("back_on");
    $(".guide").addClass("guide_on");
    $("body").addClass("body_lock");
  }

  function modalOff() {
    $(".myswiper .modal_back").removeClass("back_on");
    $(".guide").removeClass("guide_on");
    $("body").removeClass("body_lock");

  }

  $(".responsive .btnul1 .btn1").click(function () {
    modalOn();
    return false;
  });

  $(".mobile .btnul1 .btn1").click(function () {
    modalOn();
    return false;
  });

  $(".react .btnul1 .btn1").click(function () {
    modalOn();
    return false;
  });

  $(".myswiper .modal_back").click(function () {
    modalOff();
    return false;
  });

  //   swiper pagination menu 글씨 추가

  $('.swiper-pagination>span:nth-child(1)').append('<p>Intro</p>');
  $('.swiper-pagination>span:nth-child(2)').append('<p>About</p>');
  $('.swiper-pagination>span:nth-child(3)').append('<p>Main</p>');
  $('.swiper-pagination>span:nth-child(4)').append('<p>Team</p>');
  $('.swiper-pagination>span:nth-child(5)').append('<p>Mobile</p>');
  $('.swiper-pagination>span:nth-child(6)').append('<p>React</p>');
  $('.swiper-pagination>span:nth-child(7)').append('<p>Ect</p>');


// mobile btn2 iframe 등장
  $(".mobile .btnbox .btn2").click(function () {
    $(".myswiper").addClass("on");
    $(".visit").fadeIn(1000);
    $(".visitback").fadeIn(1000);

    return false;
  });

  // swiper btn1 눌렀을때 pdf 창 이동

  $(".swiper-slide .btnbox .btn1").click(function () {
    $(".myswiper").addClass("on");
    $(".visitback").fadeIn(1000);

    return false;
  });

  $(".mobile .btnbox .btn1").click(function () {
    $(".about").fadeIn(1000);
    return false;
  });

  $(".responsive .btnbox .btn1").click(function () {
    $(".aboutweb").fadeIn(1000);

    return false;
  });


  $(".about-circle").click(function () {
    $(".myswiper").addClass("on");
    $(".visitback").fadeIn(1000);
    $(".aboutweb").fadeIn(1000);

    return false;
  });

  $(".team .btnbox .btn1").click(function () {
    $(".aboutteam").fadeIn(1000);

    return false;
  });

  
  $(".react .btnbox .btn1").click(function () {
    $(".aboutreact").fadeIn(1000);

    return false;
  });


// back icon 클릭시 전환
  $(".visitback").click(function () {
    $(".myswiper").removeClass("on");
    $(".visit").fadeOut(1000);
    $(".about").fadeOut(1000);
    $(".aboutweb").fadeOut(1000);
    $(".aboutteam").fadeOut(1000);
    $(".aboutreact").fadeOut(1000);
    $(".visitback").fadeOut(1000);
  });

// about 페이지 text 뿌리기
  $(".maingrid ul").mouseover(function () {


    var tt = $(this).attr("data-name");
    $(".maingrid .intro p").text(tt);

  });









});