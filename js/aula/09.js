$(document).ready(function() {
    $("span").click(function() {
        /* Recuperar atributos
        alert($("img").attr("title")); */

        /* Alterar/Definir atributos
        $("img")
            .attr("src", "img/lucashsouza.png")
            .attr("title", "lucashsouza")
        */

        /* Alterar/Definir atributos semelhante a json
        $("img").attr({
            src: "img/lucashsouza.png",
            title: "lucashsouza"
        });*/

        /* Remover atributos
        $("img").removeAttr("src").removeAttr("title").removeAttr("alt");
        */

        /* Adiciona classe
        $("img").addClass("destaque");
        */

        /* Verificar se existe classe
        alert($("img").hasClass("destaque"));
        */

        $("img").toggleClass("destaque");
    });
});