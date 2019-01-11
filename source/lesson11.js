$(document).ready(function(){
    $("input[name='name']").keydown(function(e){
        console.log(e.keyCode);
        if(e.keyCode == 13){
            console.log("ENTER PRESSED");
        }
    })
    $("input[name='name']").keyup(function(e){
        console.log(e);
    })
    $("input").keypress(function(e){
        console.log(e);
    });
})