var quiz = [
  "What year was Alpha Delta Phi founded?",
  "What is the name of our illustrious founder?",
  "What year was our chapter house built?",
  "How many chapters do we have internationally?",
  "Fill in the blank: ____ Troll"
];
var a1 = [
  "1820",
  "1830",
  "1832",
  "1834"
];
var a2 = [
  "Samuel Eels",
  "Samuel Eldrick",
  "Richard Eels",
  "Richard Eldrick"
];
var a3 = [
  "1920",
  "1925",
  "1926",
  "1930"
];
var a4 = [
  "25",
  "26",
  "30",
  "33"
];
var a5 = [
  "Big",
  "Small",
  "Come",
  "There"
];
var score = 0;
$(document).ready(function() {
  newQuiz();
});
function newQuiz() {
	console.log("called newQuiz");
  $("#q-text").text(quiz[0]);
  $(".answers").append(makeUL(a1));
  score = 0;
  $("#s-number").text("Your Score is: " + score + "/5");
}
// bind handler to ul
// populate ul with li answers
// upon li click, check against correct answer
// change score
// highlight correct answer in green for 2 sec
// highlight wrong answers in red for 2 sec
// show next question
// when all 5 questions are answered, display congratulations if 5/5 or else press "new game" to try against

$("#newgame").click(function() {
  newQuiz();
});
function makeUL(array) {
  // Create the list element:
  var list = document.createElement('ul');
  for(var i = 0; i < array.length; i++) {
    // Create the list item:
    var item = document.createElement('li');
    // Set its contents
    item.appendChild(document.createTextNode(array[i]));
    // Add it to the list:
    list.appendChild(item);
  }
  return list;
}
