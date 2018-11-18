var countdownTime = 124;
var correctScore = 0;
var incorrectScore = 0;
var unansweredScore = 5;

document.getElementById("StepInto").onclick = function() {myFunction()};

function myFunction() {
  
     	
$( "#triviaQuiz" ).empty();


setInterval(function() {
    countdownTime--
    $("#part2").html(countdownTime);
    $("#part2").append("<br>" + "<button>" + "Done" + "</button>");







     if (countdownTime === 0) {
    $( "#triviaQuiz" ).empty();
    $("#part2").html("<br>" + "Correct Answers: " + correctScore + "<br>");
    $("#part2").append("<br>" + "Incorrect Answers: " + incorrectScore + "<br>");
    $("#part2").append("<br>" + "Unanswered Questions: " + unansweredScore + "<br>");
    countdownTime++
  }
  }, 1000);

 

}


