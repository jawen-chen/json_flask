$("#Amod").click(function(){
    alert("1");
    $("#side-left").css("display", "block");
    $("#side-left").css("float", "none");
    $("#side-left").css("width", "100%"); 
    $("#side-right").css("width", "0%"); 
    $("#side-right").css("display", "hidden"); 
    $("#side-right").css("float", "none"); 
})

$("#Bmod").click(function(){
    $("#side-left").css("display", "block");
    $("#side-left").css("float", "left");
    $("#side-left").css("width", "50%"); 
    $("#side-right").css("width", "50%"); 
    $("#s0ide-right").css("display", "block"); 
    $("#side-right").css("float", "left"); 
})

$("#Cmod").click(function(){
    $("#side-left").css("display", "hidden");
    $("#side-left").css("float", "none");
    $("#side-left").css("width", "0%"); 
    $("#side-right").css("width", "100%"); 
    $("#side-right").css("display", "block"); 
    $("#side-right").css("float", "none"); 
})