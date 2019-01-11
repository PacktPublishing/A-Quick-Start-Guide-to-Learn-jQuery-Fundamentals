$(document).ready(function(){


    $("h1").mouseenter(function(){
        $(this).addClass("red");
    })
    $("h1").mouseout(function(){
        $(this).removeClass("red");
    })
})