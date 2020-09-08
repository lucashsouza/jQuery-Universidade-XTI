$(document).ready(function() {

    // Elemento descendente
    $("div span").css("background-color", "yellow");

    // Elemento "filho"
    $("li > ul").css("color", "red");

    // Elemento "irmão"
    $("#Item1_1 + li").css("color", "blue");
    $("#Item1_1 ~ li").css("color", "blue");
});