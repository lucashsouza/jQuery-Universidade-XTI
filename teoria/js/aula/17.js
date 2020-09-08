$(document).ready(function() {

    function mensagem(e) {
        $("#mensagem").text($(this).val());
    }

    $("fieldset").delegate(":text", "keyup", mensagem);

    $(":button").bind("click", function(e, src, width) {
        $("#mensagem").append($("<img />").attr("src", src).css("width", width));
    });

    $(":button").trigger("click", ["/img/lucashsouza.png", "90px"]);

});