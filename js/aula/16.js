$(document).ready(function() {
    $(":text").keyup(function() {
        $("#mensagem").text($(this).val());
    }).focus(function() {
        $(this).css("background", "yellow");
        $("#mensagem").text("Focus");
    }).blur(function() {
        $(this).css("background", "#DDD");
        $("#mensagem").text("Blur");
    });

    // Validação de formulários
    $("form").submit(function() {
        if ($(":text").val() == "texto") {
            return true;
        } else {
            return false;
        }
    });

    $("select").change(function() {
        let selecionado = $("option:selected").text();
        $("#mensagem").text("Escolhido: " + selecionado);
    });

    $("textarea").select(function() {
        $("#mensagem").text("Selecionou!");
    })
});