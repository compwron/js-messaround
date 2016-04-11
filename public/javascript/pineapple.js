$(function(){
  $(".pineapple-launcher, .pineapple-background, .pineapple-close").click(function (evt) {
    evt.preventDefault();
    $(".pineapple-content, .pineapple-background").toggleClass("active");
    // this is bad because its using dom statefulness to store application state. use data-based rendering instead (depend on the javascript to add/remove) react calls it flux, backbone says mvc
  });
});
