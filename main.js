let like=document.getElementById('like');
let dislike=document.getElementById('dislike');
let popup=document.getElementById('popupwindow');

dislike.addEventListener('click',function(e){
  e.stopPropagation();
  popup.style.visibility="visible";
  

});
document.addEventListener('click',function(){
  popup.style.visibility="hidden";
});



like.addEventListener('click',function(e){
  e.stopPropagation();
  window.location.href="page2.html"
});