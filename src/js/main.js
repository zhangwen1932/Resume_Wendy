const callback = () => {
  $('.skill-item').each(function () {
    newWidth = $(this).parent().width() * $(this).data('percent');
    $(this).width(0);
    $(this).animate({
      width: newWidth,
    }, 1000);
  });
  $('.icons-red').each(() => {
    height = $(this).height();
    $(this).animate({
      height: 14,
    }, 2000);
  });
};
$(document).ready(() => {
  $('#status').fadeOut();
  $('#preloader').delay(350).fadeOut('slow');
  $('body').delay(350).css({
    'overflow': 'visible'
  });
  callback();
  $.ajax({
    method: "GET",
    url: "./src/documents/info.json",
    cache: false,
    dataType: "text"
  }).done((data)=>{
    const info = $.parseJSON(data);
    if(info.success){
      const userInfo = info.data;
      // 渲染about板块
      const about = userInfo.about;
      // 渲染教育板块
      const eduction = userInfo.eduction;
      // 渲染经历板块
      const experience = userInfo.experience;
      // 渲染联系板块
      const contact = userInfo.contact;
      // 渲染技能板块
      const skill = userInfo.skill;
      // 渲染爱好板块
      const hobbies = userInfo.hobbies;
    }
  }).fail((error)=>{
    console.log('error', error);
  });
});

let resize;
window.onresize = () => {
  clearTimeout(resize);
  resize = setTimeout(() => {
    callback();
  }, 100);
};