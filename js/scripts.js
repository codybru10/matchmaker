$(document).ready(function(){

  $("form#quiz").submit(function(event) {
    var ratingInput = $("select#rating").val();

    if (ratingInput === "Loser") {
      $(".result").hide();
      $(".losers").show();
    } else if (ratingInput === "Average Joe") {
      $(".result").hide();
      $(".average-joes").show();
    } else if (ratingInput ==="Winner") {
      $(".result").hide();
      $(".winners").show();
    } else {
      $(".result").hide();
      alert("Pick a rating");
    };

    event.preventDefault();
  });


});
