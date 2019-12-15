$(document).ready(function(){
});
$(window).scroll(function() {
  var win_h = document.documentElement.clientHeight;
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
var num = [];
num[0] = num[1] = num[2] = 2;
function changeImg(n,i){
  var id = 'ipadImg'+n;
  document.getElementById(id).style.animation='ipadImg 1.5s 1 ease-in-out';
  document.getElementById(id).addEventListener("webkitAnimationEnd", function() {
    if($('#'+id).css('animation-name')!='none'){
      $(this).parent().find('img').css("background-image","url('img/comic/comic_"+n+"-"+num[n-1]+".png')");
      var n2;
      n2 = num[n-1]+1;
      if(n2==i)n2=1;
      $(this).css("background-image","url('img/comic/comic_"+n+"-"+n2+".png')");
      num[n-1]++;
      if(num[n-1]==i)num[n-1]=1;
      $(this).css('animation','');
    }
  })
}
function gotoComic(unit){
  window.scrollTo({'behavior': 'smooth', 'top': document.getElementById(unit).offsetTop})
}
