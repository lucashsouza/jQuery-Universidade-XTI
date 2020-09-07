$(document).ready(function() {

    $("span:eq(0)").click(function() {
        $("div").hide(1000); // normal, fast, slow ou em milisegundos
    });

    $("span:eq(1)").click(function() {
        $("div").show("fast"); // normal, fast, slow ou em milisegundos
    });

    $("span:eq(2)").click(function() {
        $("div").toggle(1000);
    });

});