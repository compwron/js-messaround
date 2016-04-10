$(function(){
  $(".pineapple-launcher, .pineapple-background, .pineapple-close").click(function () {
    $(".pineapple-content, .pineapple-background").toggleClass("active");
  });
});
