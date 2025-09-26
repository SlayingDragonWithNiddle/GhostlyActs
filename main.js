$(document).ready(function(){
  
  
  $('#like').click(function(){
    window.location.href='page2.html';
  });
  
  $('#dislike').click(function(e){
    e.stopPropagation();
    $('#popupwindow').fadeIn();
    
  
  });
  
  $('body').click(function(){
  $('#popupwindow').hide();
});
  
  
});