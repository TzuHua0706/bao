var chapterNum=4;
var messagrRef=[];
var messagrStart=[];
var input=[];
var pageNum = [];
pageNum[0]=pageNum[1]=pageNum[2]=pageNum[3]=1;
var user_message;
var move_flag=0;
$(document).ready(function(){
  //firebase
  const firebaseConfig = {
    apiKey: "AIzaSyB4740F8yj23NiYuLW07Ni6Cv7oyv9-c1Y",
    authDomain: "bao-message.firebaseapp.com",
    databaseURL: "https://bao-message.firebaseio.com",
    projectId: "bao-message",
    storageBucket: "bao-message.appspot.com",
    messagingSenderId: "128989111155",
    appId: "1:128989111155:web:349b4458ebd7abc10b9b06",
    measurementId: "G-YG3CKTK6K5"
  };
  firebase.initializeApp(firebaseConfig);
  for(var chapter=1;chapter<=chapterNum;chapter++){
    messagrRef[chapter-1] = [];
    messagrStart[chapter-1] = [];
    for(var page=1;page<=4;page++){
      messagrRef[chapter-1][page-1]=firebase.database().ref('chapter'+chapter+'/page'+page+'/messageNum');
      messagrStart[chapter-1][page-1]=0;
    }
  }
  firebaseUpdate(1,1);
  firebaseUpdate(1,2);
  firebaseUpdate(1,3);
  firebaseUpdate(1,4);
  firebaseUpdate(2,1);
  firebaseUpdate(2,2);
  firebaseUpdate(2,3);
  firebaseUpdate(2,4);
  firebaseUpdate(3,1);
  firebaseUpdate(3,2);
  firebaseUpdate(3,3);
  firebaseUpdate(3,4);
  firebaseUpdate(4,1);
  firebaseUpdate(4,2);
  firebaseUpdate(4,3);
  firebaseUpdate(4,4);
  //enter傳送
  for(var chapter=1;chapter<=chapterNum;chapter++){
    input[chapter-1] = document.getElementById("input_"+chapter);
  }
  input[0].addEventListener("keyup", function(event) {
    if (event.keyCode == 13) {
      event.preventDefault();
      input[0].nextElementSibling.click();
    }
  });
  input[1].addEventListener("keyup", function(event) {
    if (event.keyCode == 13) {
      event.preventDefault();
      input[1].nextElementSibling.click();
    }
  });
  input[2].addEventListener("keyup", function(event) {
    if (event.keyCode == 13) {
      event.preventDefault();
      input[2].nextElementSibling.click();
    }
  });
  input[3].addEventListener("keyup", function(event) {
    if (event.keyCode == 13) {
      event.preventDefault();
      input[3].nextElementSibling.click();
    }
  });
});
function firebaseUpdate(chapter,page){
  messagrRef[chapter-1][page-1].on('value', function(snapshot) {
    if(messagrStart[chapter-1][page-1]==0){
      //第一次
      for(var num=1;num<=snapshot.val();num++){
        var ref = firebase.database().ref('chapter'+chapter+'/page'+page+'/'+snapshot.val());
        var textRef = ref.child('message');
        textRef.once('value', function (snapshot) {
          var message = document.createElement("div");
          document.getElementById('page'+chapter+'-'+page).appendChild(message);
          var text = document.createElement("div");
          text.setAttribute("class","message_text");
          message.appendChild(text);
          $(text).html(snapshot.val());
          var circle = document.createElement("div");
          circle.setAttribute("class","message_circle");
          message.style.marginLeft=-text.offsetWidth/2+429+'px';
          message.style.marginTop=-text.offsetHeight/2+320+'px';
          message.style.position='absolute';
          message.style.cursor='move';
          circle.style.marginLeft=-text.offsetWidth-24+'px';
          message.appendChild(circle);
        });
      }
      messagrStart[chapter-1][page-1]=1;
    }
    else{
      //之後的
      var ref = firebase.database().ref('chapter'+chapter+'/page'+page+'/'+snapshot.val());
      var textRef = ref.child('message');
      textRef.once('value', function (snapshot) {
        var message = document.createElement("div");
        document.getElementById('page'+chapter+'-'+page).appendChild(message);
        var text = document.createElement("div");
        text.setAttribute("class","message_text");
        message.appendChild(text);
        $(text).html(snapshot.val());
        var circle = document.createElement("div");
        circle.setAttribute("class","message_circle");
        message.style.marginLeft=-text.offsetWidth/2+429+'px';
        message.style.marginTop=-text.offsetHeight/2+320+'px';
        message.style.position='absolute';
        message.style.cursor='move';
        circle.style.marginLeft=-text.offsetWidth-24+'px';
        message.appendChild(circle);
      });
    }
  });
}
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
var twoswitch=[];
twoswitch[0]=twoswitch[1]=twoswitch[2]=twoswitch[3]=0;
function messageBtn(btn,chapterNum){
  btn.src='img/comic/eye_'+twoswitch[chapterNum-1]+'.png';
  btn.previousElementSibling.style.opacity=twoswitch[chapterNum-1];
  if(twoswitch[chapterNum-1])twoswitch[chapterNum-1]=0;
  else twoswitch[chapterNum-1]=1;
}
function message(chapterNum){
  user_message = document.getElementById('message_'+chapterNum);
  var text = document.createElement("div");
  text.setAttribute("class","message_text");
  user_message.appendChild(text);
  $(text).html(document.getElementById("input_"+chapterNum).value);
  var circle = document.createElement("div");
  circle.setAttribute("class","message_circle");
  user_message.style.marginLeft=-text.offsetWidth/2+429+42+'px';
  user_message.style.marginTop=-text.offsetHeight/2+320-782+'px';
  user_message.style.position='absolute';
  user_message.style.zIndex=1;
  user_message.style.cursor='move';
  circle.style.marginLeft=-text.offsetWidth-24+'px';
  user_message.appendChild(circle);
  $(user_message).mousedown(function(e){
    $(document).bind("mousemove",function(e){
      user_message.style.margin=0;
      $(user_message).css("left",e.pageX).css("top",e.pageY);
    });
  });
  $(user_message).mouseup(function(e){
    $(document).unbind("mousemove");
    var messagrNumRef = firebase.database().ref('chapter'+chapterNum+'/page'+(pageNum[chapterNum-1])+'/messageNum');
    messagrNumRef.once('value', function (snapshot) {
      messageNum = Number(snapshot.val())+1;
      firebase.database().ref('chapter'+chapterNum+'/page'+(pageNum[chapterNum-1])).update({messageNum:messageNum});
      firebase.database().ref('chapter'+chapterNum+'/page'+(pageNum[chapterNum-1])+'/'+messageNum).set({message:input[chapterNum-1].value,x:user_message.style.left,y:user_message.style.top});
      input[chapterNum-1].value="";
    });
    user_message=null;
     document.getElementById('message_'+chapterNum).removeChild(text);
     document.getElementById('message_'+chapterNum).removeChild(circle);
  })
}
function changeImg(btn,chapter,direction){
  if((direction=='left'&&pageNum[chapter-1]>1)||(direction=='right'&&pageNum[chapter-1]<4)){
    for(var ch=1;ch<=chapterNum;ch++)
      for(var page=1;page<=4;page++)
        document.getElementById('page'+ch+'-'+page).style.opacity=0;
    var img;
    if (direction=='right')img = btn.nextElementSibling;
    else if(direction=='left')  img = btn.nextElementSibling.nextElementSibling;
    if($(img).css('animation-name')=='none')
    {
      if (direction=='right')pageNum[chapter-1]++;
      else if(direction=='left')pageNum[chapter-1]--;
      img.style.backgroundImage=img.style.backgroundImage.substring(0,img.style.backgroundImage.length-7)+pageNum[chapter-1]+img.style.backgroundImage.substring(img.style.backgroundImage.length-6);
      img.style.animation='ipadImg_'+direction+' 1.5s 1 ease-in-out';
      img.addEventListener("webkitAnimationEnd", function() {
        if($(img).css('animation-name')!='none'){
          $(this).parent().find('img').css("background-image",img.style.backgroundImage);
          console.log('page'+chapter+'-'+pageNum[chapter-1]);
          document.getElementById('page'+chapter+'-'+pageNum[chapter-1]).style.opacity=1;
          $(this).css('animation','none');
        }
      });
    }
  }
}
