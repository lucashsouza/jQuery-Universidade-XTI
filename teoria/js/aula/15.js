$(document).ready(function() {
    $("span").click(function() {
        // $("div").text("Click").css("color", "blue");
    }).dblclick(function() {
        // $("div").text("Click duplo").css("color", "red");
    }).mouseover(function() {
        // $("div").text("Mouse over").css("color", "white");
    }).mouseout(function() {
        // $("div").text("Mouse out").css("color", "black");
    }).mouseup(function() {
        $("div").text("Mouse up").css("color", "green");
    }).mousedown(function() {
        $("div").text("Mouse down").css("color", "yellow");
    }).mousemove(function(p) {
        $("div").text("X=" + p.clientX + "Y=" + p.clientY).css("color", "black");
    });
})