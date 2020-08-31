$(document).ready(function() {
    $("span").click(function() {
      
      /* Alert com informação do css
      alert($("img").css("width")); */
      
      /* Alterando css
      $("img").css({
        width: "300px",
        background: "#00FF00",
        border: "30px solid #B22222"
      }); */

      /* Existe a Classe?
      alert($("img").hasClass("imagem")); */
      
      /* Remove classe
      $("img").removeClass("imagem"); */

      /* Adicionar classe
      $("img").addClass("destaque"); */

      // Altura e largura
      // alert($("img").width());
      // alert($("img").innerWidth()); // img + padding
      // alert($("img").outerWidth(false)); // img + padding + border

      // Posicao
      alert($("img").position().top);
      alert($("img").position().left);

    });
});