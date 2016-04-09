$(function(){
  $(".pineapple-modal").hide();

  $(".get-pineapple-modal").bind("click", function (event) {
    $(".pineapple-modal").show();
  });

  $(".pineapple-modal").bind("click", function (event) {
    $(".pineapple-modal").hide();
  });
});
