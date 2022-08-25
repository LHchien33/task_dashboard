$(function() {
  console.log('Hello Bootstrap5');
});

$(document).ready(function(){

  // editor toggle
  $('.editor-customize').hide();
  $('.editor-toggle').on('click',function(e){
    e.preventDefault();
    $('.editor-customize').toggle();
  });

  // sideMenu link switch
  $('.sideMenu-link').on('click',function(){
    $(this).addClass('sideMenu-link-active').parent().siblings().children('.sideMenu-link').removeClass('sideMenu-link-active');
  });


});
