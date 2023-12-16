$(document).ready(function(){
  

  function mousePos(event) {
    
    $(".mainobject").css({"left":event.clientX, "top":event.clientY});
    

  }
  
  document.addEventListener("click", mousePos);
})



