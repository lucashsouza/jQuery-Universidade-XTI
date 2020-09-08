$(document).ready(function() {
    $("span").click(function() {
        /* Recuperar html
        alert($("p").html()); */

        /* Alterar HTML
        $("p").html("<a href=https://github.com/lucashsouza target=blank>GitHub</a>"); */

        /* Adicionando conteudo na div e alert com resultado
        $("div").text("teste div");
        alert($("div").text());
        */

        /* Recuperando e adicionando conteudo do paragrafo na div
        $("div").text($("p").html()) */

        /* Alterar paragrafo com valor de textarea
        $("p").html($("textarea").val());
        */

        // Refatorando tag div por conteudo do textarea
        $("div").replaceWith($("textarea").val());
    });
});