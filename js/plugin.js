$(document).ready(function(){
  $('.toggle-class').click(function(){

    if ($(".sidebar").hasClass("toggled")) {
      $('.sidebar-open').css('display', 'none');
      $('.sidebar-closed').css('display', 'block');

    } else {
      $('.sidebar-open').css('display', 'block');
      $('.sidebar-closed').css('display', 'none');
    }

  });
});
