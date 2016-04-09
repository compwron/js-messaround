$(function(){
  $(".foo").bind("click", function (event) {
    $("bar").hide();
  });

  $("baz").bind("click", function (event) {
    $("bar").show();
  });
});
