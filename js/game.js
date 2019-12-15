var bo;
$(document).ready(function(){
  setInterval(update,10);
  bo = document.getElementById('runBo');
});
var gsmeStart = 0;
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
      gsmeStart = 1;
      var bo = document.getElementById('runBo');
      bo.src = "gif/run.gif";
    }
    else{
      $(this).css('background-image','none');
      gsmeStart = 0;
      var bo = document.getElementById('runBo');
      bo.src = "gif/run.png";
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
var time = 0;
var jump = 0;
var obS = 0; //start
var obE = 0; //end
var obtime = [];
var img = []; //ob
function update(){
  if(gsmeStart){
    time++;
    if(!(time%300)&&Math.floor(Math.random()*3)){ //每3秒2/3出障礙物
      //ob create
      if(img[obE]==null){
        obtime[obE] = 0;
        img[obE]= document.createElement("img");
        img[obE].setAttribute("class","ob");
        img[obE].style.left = "1440px";
        img[obE].src='img/game/ob_'+(Math.floor(Math.random()*10)+1)+'.png';
        document.getElementById('game').appendChild(img[obE]);
        obE++;
      }
      console.log(img.length);
    }
    $('.grass').css('background-position',-time*2);
    for(var i=obS; i<obE; i++){
      obtime[i]++;
      if(img[i]!=null){
        if(img[i].style.left.substring(0,img[i].style.left.length-2) >= 150&&
        img[i].style.left.substring(0,img[i].style.left.length-2) <= 250){
          if(bo.offsetLeft<img[i].offsetLeft+img[i].offsetWidth&&
            bo.offsetLeft+bo.offsetWidth>img[i].offsetLeft&&
            bo.offsetTop<img[i].offsetTop+img[i].offsetHeight&&
            bo.offsetHeight+bo.offsetTop>img[i].offsetTop
          ){
            gameStart=0;
          }
        }
        if(img[i].style.left.substring(0,img[i].style.left.length-2) <= -60){
          obS++;
          document.getElementById('game').removeChild(img[i]);
          delete img[i];
          delete obtime[i];
        }
        else img[i].style.left = 1440-obtime[i]*2+'px';
      }
    }
    if(jump){
      bo.style.animation = 'JumpBo 1.2s 1 ease-in-out';
      bo.addEventListener("webkitAnimationStart", function() {
        bo.src = "gif/jump.gif";
      })
      bo.addEventListener("webkitAnimationEnd", function() {
        if($(bo).css('animation-name')!='none'){
          bo.src = "gif/run.gif";
          jump = 0;
          $(this).css('animation','');
        }
      })
    }
  }
}
var num = [];
num[0] = num[1] = num[2] = 2;
function changeImg(n,i){
  var id = 'ipadImg'+n;
  document.getElementById(id).style.animation='ipadImg 1.5s 1 ease-in-out';
  document.getElementById(id).addEventListener("webkitAnimationEnd", function() {
    if($('#'+id).css('animation-name')!='none'){
      $(this).parent().find('img').css("background-image","url('img/game/00"+n+"-"+num[n-1]+".png')");
      var n2;
      n2 = num[n-1]+1;
      if(n2==i)n2=1;
      $(this).css("background-image","url('img/game/00"+n+"-"+n2+".png')");
      num[n-1]++;
      if(num[n-1]==i)num[n-1]=1;
      $(this).css('animation','');
    }
  })
}
