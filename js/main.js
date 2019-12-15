$(document).ready(function(){
});
$(window).scroll(function() {
  var win_h = document.documentElement.clientHeight;
  var header_h = $('header').innerHeight();
  if($(this).scrollTop()>=$('header').offset().top+header_h){
    $('nav').css('position','fixed');
    $('nav').css('top',0);
  }
  else{
    $('nav').css('position','static');
  }
  $('#bg2').each(function(index, element){
    var height = $('#bg1').innerHeight();
    var h = $(window).scrollTop()*(-40/height*4)+77;/*77*/
    $(this).css('top',h);
  });
  $('#bg3').each(function(index, element){
    var height = $('#bg1').innerHeight();
    var h = $(window).scrollTop()*(-80/height*6)+402/*402*/
    $(this).css('top',h);
  });
  $('#bgp').each(function(index, element){
    var height = $('#bg1').innerHeight();
    var h = $(window).scrollTop()*(-80/height*6)+50/*402*/
    $(this).css('top',h);
  });
  $(".shake").each(function(index, element){
    if($(window).scrollTop()>=$(this).offset().top-win_h/2){
      $(this).css('animation','shake 1s infinite ease-in-out');
    }
    else{
      $(this).css('animation','none');
    }
  });
  $("#walkBao").each(function(index, element){
    var height = $(this).innerHeight();
    if($(window).scrollTop()>=$(this).offset().top+height/2-win_h/2){
      $('.walkBao').css('animation','walkBao 1s 1 ease-in-out');
      $('.walkBao').css('opacity','1');
    }
    else{
      $('.walkBao').css('opacity','0');
      $('.walkBao').css('animation','none');
    }
  });
  $(".lineImg").each(function(index, element){
    if($(window).scrollTop()>=$(this).offset().top-win_h/2){
      $(this).css('background-image','url(img/main/01_pic_'+this.src.substring(this.src.length-5));
    }
    else{
      $(this).css('background-image','none');
    }
  });
  $("#colorImg").each(function(index, element){
    var height = document.body.clientHeight;
    if($(window).scrollTop() + win_h >= height){
      $(this).css('background-image','url(img/main/01_pic_'+this.src.substring(this.src.length-5));
    }
    else{
      $(this).css('background-image','none');
    }
  });
});
