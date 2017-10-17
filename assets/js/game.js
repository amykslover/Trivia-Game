var quiz = [{
    question: "When you're capernoited, what are you?",
    answers: {
        answer1: "a. Slighty afraid",
        answer2: "b. Slightly drunk",
        answer3: "c. Slightly embarrassed",
        answer4: "d. Slightly out of tune"},
    correct: 1,
    unanswered: true
},
{
    question: "Cleromancy is divination involving what?",
    answers: {
        answer1: "a. Dice",
        answer2: "b. Glass",
        answer3: "c. Twigs",
        answer4: "d. Ink"},    
    correct: 0,
    unanswered: true
},
{
    question: "What does a nuxodeltiologist prefer postcard scenes of?",
    answers: {    
        answer1: "a. The road",
        answer2: "b. The trees",
        answer3: "c. The ocean",
        answer4: "d. The night"},
    correct: 3,
    unanswered: true
},
{
    question: "What do you have when you're sciapodous?",
    answers: {        
        answer1: "a. Huge nose",
        answer2: "b. Huge chin",
        answer3: "c. Huge feet",
        answer4: "d. Huge ears"},  
    correct: 2,
    unanswered: true
},
{
    question: "What are you full of when you're gambrinous?",
    answers: { 
        answer1: "a. Beer",
        answer2: "b. Joy",
        answer3: "c. Chicken",
        answer4: "d. Sweat"}, 
    correct: 0,
    unanswered: true
},
{
    question: "Tropoclastics is actually the science of",
    answers: {    
        answer1: "a. House keeping",
        answer2: "b. Ancient writing",
        answer3: "c. Breaking habits",
        answer4: "d. Eavesdropping"},    
    correct: 2,
    unanswered: true
},
{
    question: "What do you most fear in hormephobia?",
    answers: { 
        answer1: "a. Saliva",
        answer2: "b. Shock",
        answer3: "c. Static",
        answer4: "d. Silence"},    
    correct: 1,
    unanswered: true
},
{
    question: "What does ponophobia mean?",
    answers: { 
        answer1: "a. The fear of overheating",
        answer2: "b. The fear of oversleeping",
        answer3: "c. The fear of overthinking",
        answer4: "d. The fear of overworking"},    
    correct: 3,
    unanswered: true
},
{
    question: "Iatrapistia is the lack of faith in what?",
    answers: { 
        answer1: "a. The medical system",
        answer2: "b. The judicial system",
        answer3: "c. The educational system",
        answer4: "d. The legal system"},    
    correct: 0,
    unanswered: true
},
{
    question: "Where is the dactylion?",
    answers: { 
        answer1: "a. Thumb",
        answer2: "b. Forefinger",
        answer3: "c. Middle finger",
        answer4: "d. Ring finger"},    
    correct: 2,
    unanswered: true
}];

// function timer() {
//     var timeleft = 10;
//     var downloadTimer = setInterval(function(){
//     document.getElementById("progressBar").value = 10 - --timeleft;
//   if(timeleft <= 0)
//     clearInterval(downloadTimer);
// },1000);
// }

function move() {
  var elem = document.getElementById("myBar");   
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}


for (var i = 0; i < quiz.length; i++) {
    if(quiz[i].unanswered) {
        // $("#question").html(quiz[1].question);
        // $('#answer1').html(quiz[i].answers.answer1);
        // $('#answer2').html(quiz[i].answers.answer2);
        // $('#answer3').html(quiz[i].answers.answer3);
        // $('#answer4').html(quiz[i].answers.answer4);
    }
    console.log(quiz[i].question);
    //  {
    // $("#question, #answer1, #answer2, #answer3, #answer4").empty();    
    // }
}
