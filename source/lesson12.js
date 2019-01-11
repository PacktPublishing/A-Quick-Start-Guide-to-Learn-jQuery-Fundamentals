$("h1").on("click",function(){
    console.log("Clicked");
})
$("div").on("mouseenter",function(){
    console.log("Mouse Enter");
    $(this).addClass("red");
})
$("div").on("mouseleave",function(){
    console.log("Mouse Enter");
    $(this).removeClass("red");
})