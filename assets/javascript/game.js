var countdownTime = 124;

document.getElementById("StepInto").onclick = function() {myFunction()};

function myFunction() {
  
     	
$( "#triviaQuiz" ).empty();


setInterval(function() {
    countdownTime--
    $("#part2").html(countdownTime);
    
  }, 1000);


}


