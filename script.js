//Javascript

var rangeSliderValue = function(range){
  var displayRange = document.getElementById('priority');
  var displayPriority = document.getElementById('priority-label');
  
  displayRange.innerHTML = range;
  if (range == 1){
    //do stuff
    displayRange.style.color = "blue";
    displayPriority.style.color = "blue";
    displayPriority.innerHTML = "Very Low";
  }
  else if (range == 2){
    displayRange.style.color = "purple";
    displayPriority.style.color ="purple";
    displayPriority.innerHTML = "Low";
  }
  else if (range == 3){
    displayRange.style.color = "yellow";
    displayPriority.style.color = "yellow";
    displayPriority.innerHTML = "Medium";
    
  }
  else if (range == 4){
    displayRange.style.color = "orange";
    displayPriority.style.color = "orange";
    displayPriority.innerHTML = "High";
  }
  else if (range == 5){
    displayRange.style.color = "red";
    displayPriority.style.color = "red";
    displayPriority.innerHTML = "Very High";
  }
  else{
    displayRange.style.color = "blue";
    displayPriority.style.color = "blue";
    displayPriority.innerHTML = "None";
  }
};


//jQuery
$(document).ready(function(){
    //get value in field
   

   $('.submit').click(function(){
       var project = $('input[name=project]').val();
       var details= $('textarea[name=details]').val();
        
    //if has title
    if (project.length > 0) {
        project = project
      } 
    // doesnt have title    
     else {
        project = "N/A"
      }

      if (details.length > 0) {
        details = details
      } 

     else {
        details = "N/A"
      }

    $('.projects').append('<div class="project">' + '<h2>' + project + '</h2>' + '<span class="close">X</span>' + '<p>' + details + '</p>' +'<h3>Priority</h3> <div id="priority-wrap"><span id="priority" class="priority">1</span> - <span class="priority-label" id="priority-label">Very Low</span></div><input class="priority-slider" type ="range" value= "1" min ="1" max="5" step ="1" onChange="rangeSliderValue(this.value)">'+'</div>');
     
 });//end submit
  
  //slider 
  
  


  
  //priorities
  
$(document).on('click', '.close', function() {
    $(this).parent().remove(); 
 });

});