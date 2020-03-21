const callback = () => {
  // $('.skill-item').each(function () {
  //   newWidth = $(this).parent().width() * $(this).data('percent');
  //   $(this).width(0);
  //   $(this).animate({
  //     width: newWidth,
  //   }, 1000);
  // });
  $('.icons-red').each(() => {
    height = $(this).height();
    $(this).animate({
      height: 14,
    }, 2000);
  });
};
$(document).ready(() => {
  // $('#status').fadeOut();
  // $('#preloader').delay(350).fadeOut('slow');
  // $('body').delay(350).css({
  //   'overflow': 'visible'
  // });
  callback();
  $.ajax({
    method: "GET",
    url: "documents/info.json",
    cache: false,
    dataType: "text"
  }).done((data)=>{
    $('#preloader').remove();
    const info = $.parseJSON(data);
    if(info.success){
      const userInfo = info.data;
      // 渲染about板块
      const about = userInfo.about;
      $('#about').html(about);
      // 渲染教育板块
      const eduction = userInfo.eduction;
      let edcutionRender = '';
      if(eduction.length>0){
        eduction.forEach(item => {
          edcutionRender += 
          `<li>
            <div class="row">
              <div class="year pull-left">${item.time}</div>
              <div class="description pull-right">
                <h3>${item.school}</h3>
                <p>${item.content}</p>
              </div>
            </div>
          </li>`
        });
        $('#education').html(edcutionRender);
      }
      // 渲染经历板块
      const experience = userInfo.experience;
      let experienceRender = '';
      if (experience.length>0){
        experience.forEach((item) => {
          experienceRender +=
            `
        <div class="job clearfix">
            <div class="row">
              <div class="col-3">
                <div class="where">${item.company}</div>
                <div class="year">${item.time}</div>
              </div>
              <div class="col-9">
                <div class="profession">${item.position}</div>
                <div class="description">
                  ${item.content}
                </div>
              </div>
            </div>
          </div>
        `
        })
        $('#job').html(experienceRender);
      }
      // 渲染联系板块
      const contact = userInfo.contact;
      let contactRender = '';
      if(contact.length > 0){
        contact.forEach((item) => {
          contactRender += `
          <div class="contact-item">
            <div class="row">
              <div class="col-2">
                <div class="icon pull-left text-center">
                  <i class="iconfont ${item.icon}"></i>
                </div>
              </div>
              <div class="col-10">
                <div class="title pull-right">${item.nickname}</div>
                <div class="description pull-right">${item.content}</div>
              </div>
            </div>
          </div>
          `
        })
        $("#contact").html(contactRender);
      }
      // 渲染技能板块
      const skill = userInfo.skill;
      let skillRender = '';
      if(skill.length>0){
        skill.forEach((item) => {
          skillRender += `
          <div class="skill-item" data-percent="${item.percent}">
              ${item.name}
            </div>
          `
        })
        $('#skill').html(skillRender);
        $('.skill-item').each(function () {
          newWidth = $(this).parent().width() * $(this).data('percent');
          $(this).width(0);
          $(this).animate({
            width: newWidth,
          }, 1000);
        });
      }
      // 渲染爱好板块
      const hobbies = userInfo.hobbies;
      let hobbiesRender = '';
      if(hobbies.length>0){
        hobbies.forEach((item) => {
          hobbiesRender += `
          <div class="hobby-item">${item.name}</div>
          `
        })
        $('#hobbies').html(hobbiesRender);
      }
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