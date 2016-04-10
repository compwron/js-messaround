$(function(){
  $(".pineapple-launcher, .pineapple-background, .pineapple-close").click(function () {
    $(".pineapple-content, .pineapple-background").toggleClass("active");
  });

  $(".get-real-modal-thanks-bootstrap").click(function () {
    console.log("linda says hi")
    $('#real-modal-thanks-bootstrap').modal()
  });

  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').focus()
  })
});
