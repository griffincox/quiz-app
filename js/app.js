var selection = null;
var score = 0;
var questionnum = 1;
var question = [
  "What year was Alpha Delta Phi founded?",
  "What is the first name of our illustrious founder?",
  "What year was our chapter house built?",
  "How many chapters do we have internationally?",
  "Fill in the blank: ____ Troll"
];
var answer = [
  "1820",
  "1830",
  "1832",
  "1834",
  "1832",
  "Samuel",
  "Rodrick",
  "Tyrion",
  "Richard",
  "Samuel",
  "1920",
  "1925",
  "1926",
  "1930",
  "1926",
  "25",
  "26",
  "30",
  "33",
  "33",
  "Big",
  "Small",
  "Come",
  "There",
  "Come"
];
$(document).ready(function() {
  newQuiz();
  $("#newgame").click(function() {
    $("#a-list").empty();
    newQuiz();
  });
  $("#a-list").on("click", "li", function(event){
    console.log("User selected " + $(event.target).text());
    selection = $(event.target).text();
    // functionality
    if (questionnum == 1 && selection == answer[4]) {
      score++;
      makeQuestion(question, 1);
      $(".answers").append(makeAnswers(answer, 5, 8));
      questionnum = 2;
    }
    else if (questionnum == 1 && selection != answer[4]) {
      makeQuestion(question, 1);
      $(".answers").append(makeAnswers(answer, 5, 8));
      questionnum = 2;
    }
    else if (questionnum == 2 && selection == answer[9]) {
      score++;

      makeQuestion(question, 2);
      $(".answers").append(makeAnswers(answer, 10, 13));
      questionnum = 3;
    }
    else if (questionnum == 2 && selection != answer[9]) {
      makeQuestion(question, 2);
      $(".answers").append(makeAnswers(answer, 10, 13));
      questionnum = 3;
    }
    else if (questionnum == 3 && selection == answer[14]) {
      score++;

      makeQuestion(question, 3);
      $(".answers").append(makeAnswers(answer, 15, 18));
      questionnum = 4;
    }
    else if (questionnum == 3 && selection != answer[14]) {
      makeQuestion(question, 3);
      $(".answers").append(makeAnswers(answer, 15, 18));
      questionnum = 4;
    }
    else if (questionnum == 4 && selection == answer[19]) {
      score++;

      makeQuestion(question, 4);
      $(".answers").append(makeAnswers(answer, 20, 23));
      questionnum = 5;
    }
    else if (questionnum == 4 && selection != answer[19]) {
      makeQuestion(question, 4);
      $(".answers").append(makeAnswers(answer, 20, 23));
      questionnum = 5;
    }
    else if (questionnum == 5 && selection == answer[24]) {
      score++;

      if (score == 5) {
        $("#s-number").text("Your Score is: " + score + "/5");
        alert("You got 5/5!");
      }
      else {
        $("#s-number").text("Your Score is: " + score + "/5");
        alert("You got " + score + "/5! Press new game to try again");
      }
    }
    else {
      $("#s-number").text("Your Score is: " + score + "/5");
      alert("You got " + score + "/5! Press new game to try again");
    }
  });
});
function newQuiz() {
	console.log("called newQuiz");
  $("#q-text").text(question[0]);
  $(".answers").append(makeAnswers(answer, 0, 3));
  score = 0;
  questionnum = 1;
  $("#s-number").text("Your Score is: " + score + "/5");
}
function makeAnswers(array, lowerindex, upperindex) {
  $("#a-list").empty();
  var myNode = document.getElementById("a-list");
  // Populate the ul with answers
  for(var i = lowerindex; i <= upperindex; i++) {
    // Create the list item:
    var item = document.createElement('li');
    // Set its contents
    item.appendChild(document.createTextNode(array[i]));
    // Add it to the list:
    myNode.appendChild(item);
  }
  return myNode;
}
function makeQuestion(array, index) {
  $("#q-text").text(array[index]);
  $("#s-number").text("Your Score is: " + score + "/5");
}
