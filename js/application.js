function reset() {
  $(".card").removeClass("card-active");
  $(".content").removeClass("content-active");
}

$(function() {
  $(".yunus-whale").click(function(event) {
    event.preventDefault();
    reset();
  });

  $("a.card").click(function(event) {
    event.preventDefault();

    var card = $(this);

    reset();

    card.addClass("card-active");
    $(card.attr("href")).addClass("content-active");
  });
});
