$(document).ready(function() {
    $("span").click(function() {
    
      /* Removendo elemento do DOM
      $("h1").remove();
      $("h1").remove("#titulo");
      $("h1").remove("#fora"); */

      /* Limpa o conteudo do elemento
      $("ul").empty(); */

      // Remove tags envolventes
      $("ul").unwrap();
    });

    $("ul").append("<li>Dentro e na ultima posição</li>");
    $("ul").prepend("<li>Dentro e na primeira posição</li>");
    $("ul").before("<h1 id='titulo'>Fora e antes do elemento</h1>");
    $("ul").after('<h1 id="fora">Fora e depois do elemento</h2>');

    $("ul").wrap("<h2></h2>");

      // $("ul").append($("li").clone());
});