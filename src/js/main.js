var callback = function () {
  $('.skill-item').each(function () {
    newWidth = $(this).parent().width() * $(this).data('percent');
    $(this).width(0);
    $(this).animate({
      width: newWidth,
    }, 1000);
  });
  $('.icons-red').each(function () {
    height = $(this).height();
    $(this).animate({
      height: 14,
    }, 2000);
  });
};
$(document).ready(function() {
  $('#status').fadeOut();
  $('#preloader').delay(350).fadeOut('slow');
  $('body').delay(350).css({
    'overflow': 'visible'
  });
  callback();
});

var resize;
window.onresize = function () {
  clearTimeout(resize);
  resize = setTimeout(function () {
    callback();
  }, 100);
};