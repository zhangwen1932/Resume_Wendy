import '../css/switch-style.css';

$(document).ready(function () {
  var $switchStyle = $('.switch-style');
  $('.switch-style-toggle').click(function () {
    $switchStyle.toggleClass('active');
  });
  $(".color").click(function(e){
    var id = $(this).attr("id");
    $('#switch-style').attr("href", "src/css/colors/" + id + ".css");
    $switchStyle.removeClass('active');
    e.preventDefault();
  })
});