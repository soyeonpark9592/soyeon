// const big = document.querySelector(".detail_main img");
// const small = document.querySelectorAll("#small li a");

// for(let i=0; i<small.length; i++) {
//     small[i].addEventListener("click", function(e){
//     const New= this.href;
//     big.setAttribute("src",New);
//     e.preventDefault();
//     });


$(function () {
    $("#small>li>a").click(function () {
        $(".detail_main img").attr("src", $(this).attr("href"));
        return false;

    })


    $(".order2>img").click(function(){
        $(".order2").toggleClass("height");
        $(".order2>table").toggleClass("height");
        $(".order2>img").toggleClass("height");
    })

});