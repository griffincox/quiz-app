var selection = null;
var quiz = [
  0,
  "What year was Alpha Delta Phi founded?",
  "1820",
  "1830",
  "1832",
  "1834",
  "1832",
  "What is the name of our illustrious founder?",
  "Samuel Eels",
  "Samuel Eldrick",
  "Richard Eels",
  "Richard Eldrick",
  "Samuel Eels",
  "What year was our chapter house built?",
  "1920",
  "1925",
  "1926",
  "1930",
  "1926",
  "How many chapters do we have internationally?",
  "25",
  "26",
  "30",
  "33",
  "33",
  "Fill in the blank: ____ Troll",
  "Big",
  "Small",
  "Come",
  "There",
  "Come",
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
    if (selection = quiz[6]) {
      quiz[0]++;
      makeAnswers(quiz, 8, 11);
      makeQuestion(quiz, 7);
    }
    else {
      makeAnswers(quiz, 8, 11);
      makeQuestion(quiz, 7);
    }
  });
});
function newQuiz() {
	console.log("called newQuiz");
  $("#q-text").text(quiz[1]);
  $(".answers").append(makeAnswers(quiz, 2, 5));
  quiz[0] = 0;
  $("#s-number").text("Your Score is: " + quiz[0] + "/5");
}
// bind handler to ul
// populate ul with li answers
// upon li click, check against correct answer
// change score
// highlight correct answer in green for 2 sec
// highlight wrong answers in red for 2 sec
// show next question
// when all 5 questions are answered, display congratulations if 5/5 or else press "new game" to try against
function makeAnswers(array, lowerindex, upperindex) {
  var myNode = document.getElementById("a-list");
  var list = document.createElement('ul');
  // Populate the ul with answers
  for(var i = lowerindex; i <= upperindex; i++) {
    // Create the list item:
    var item = document.createElement('li');
    // Set its contents
    item.appendChild(document.createTextNode(array[i]));
    // Add it to the list:
    list.appendChild(item);
    // Append list to ul
    myNode.appendChild(list);
  }
  return myNode;
}
function makeQuestion(array, index) {
  $("#q-text").text(array[index]);
}
