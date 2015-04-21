function toggle(target){
    
  var artz = document.getElementsByClassName('navbar');
  var targ = document.getElementById(target);  
  var isVis = targ.style.display=='block';
    
    $(document).ready(function(){
    $(".burger").click(function(){
    });
});
  // hide all
  for(var i=0;i<artz.length;i++){
     artz[i].style.display = 'none';
      
  }
  // toggle current
  targ.style.display = isVis?'none':'block';
 
       
  return false;
}
