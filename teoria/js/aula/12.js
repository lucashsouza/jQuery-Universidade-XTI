$(document).ready(function() {
    $("span").click(function() {
      // $("ul").append("<li>Dentro e na ultima posição</li>");
      // $("ul").prepend("<li>Dentro e na primeira posição</li>");
      // $("ul").before("<h1>Fora e antes do elemento</h1>");
      // $("ul").after("<h1>Fora e depois do elemento</h2>");

      /* Envolve o elemento
      $("ul").wrap("<h2></h2>"); */

      $("ul").append($("li").clone());
    });
});