var countdownTime = 5;
var score = 0;

document.getElementById("StepInto").onclick = function() {myFunction()};

function myFunction() {
  
     	
$( "#triviaQuiz" ).empty();


setInterval(function() {
    countdownTime--
    $("#part2").html(countdownTime);
     if (countdownTime === 0) {

    $( "#triviaQuiz" ).empty();
    $("#part2").html("Score:");
    $("#part2").append("<br>" + score);

    countdownTime++
    


  }
  }, 1000);

 


}


