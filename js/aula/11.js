$(document).ready(function() {
    $("span").click(function() {
      
        var img = $("<img/>", {
            src: "img/lucashsouza.png",
            title: "lucashsouza",
            click: function(){alert("lucashsouza")}
        });
        
        // var ul = $("<ul/>").append($("<li/>").append("Programador full-stack"));
        var ul = $("<ul/>").append($("<li/>").append("Programador Fullstack"));

        $("body").append("<br /> <br />").append(ul).append(img);
    });
});