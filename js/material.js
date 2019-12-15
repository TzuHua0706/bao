$(window).scroll(function() {
  var win_h = document.documentElement.clientHeight;
  $(".lineImg").each(function(index, element){
    if($(window).scrollTop()>=$(this).offset().top-win_h/2){
      $(this).css('background-image','url(img/material/mat_pic_'+this.src.substring(this.src.length-5));
    }
    else{
      $(this).css('background-image','none');
    }
  });
  $("#colorImg").each(function(index, element){
    var height = document.body.clientHeight;
    if($(window).scrollTop() + win_h >= height){
      $(this).css('background-image','url(img/material/mat_pic_'+this.src.substring(this.src.length-5));
    }
    else{
      $(this).css('background-image','none');
    }
  });
  $("#banana").each(function(index, element){
    var height = $(this).innerHeight();
    if($(window).scrollTop()>=$(this).parent().offset().top+height/2-win_h/2){
      $(this).css('animation','banana 2.5s 1 ease-in-out');
      $(this).css('animation-fill-mode','forwards');
      $('.shadow_b').css('animation','shadow 0.5s 1 ease-in-out');
      $('.shadow_b').css('animation-delay','1.8s');
      $('.shadow_b').css('animation-fill-mode','forwards');
    }
    else{
      $(this).css('animation','none');
      $('.shadow_b').css('animation','none');
    }
  });
  $("#apple").each(function(index, element){
    var height = $(this).innerHeight();
    if($(window).scrollTop()>=$(this).parent().offset().top+height/2-win_h/2){
      $(this).css('animation-name','apple');
      $(this).css('animation-duration','2.5s');
      $(this).css('animation-iteration-count','1');
      $(this).css('animation-fill-mode','forwards');
      $('.shadow_a').css('animation','shadow 0.5s 1 ease-in-out');
      $('.shadow_a').css('animation-delay','1.8s');
      $('.shadow_a').css('animation-fill-mode','forwards');
    }
    else{
      $(this).css('animation','none');
      $('.shadow_a').css('animation','none');
    }
  });
});
