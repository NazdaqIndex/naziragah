$(function() {
  $("a.card").click(function(event) {
    event.preventDefault();

    var card = $(this);

    $(".card").removeClass("card-active");
    $(".content").removeClass("content-active");

    card.addClass("card-active");
    $(card.attr("href")).addClass("content-active");
  });
});
