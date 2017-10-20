
$(function(){

    window.onload = function() {
    //show start button
    };


    var quiz = [{
        question: "When you're capernoited, what are you?",
        answers: {
            answer1: "a. Slighty afraid",
            answer2: "b. Slightly drunk",
            answer3: "c. Slightly embarrassed",
            answer4: "d. Slightly out of tune"},
        correctAnswer: 1,
        unanswered: true
    },
    {
        question: "Cleromancy is divination involving what?",
        answers: {
            answer1: "a. Dice",
            answer2: "b. Glass",
            answer3: "c. Twigs",
            answer4: "d. Ink"},    
        correctAnswer: 0,
        unanswered: true
    },
    {
        question: "What does a nuxodeltiologist prefer postcard scenes of?",
        answers: {    
            answer1: "a. The road",
            answer2: "b. The trees",
            answer3: "c. The ocean",
            answer4: "d. The night"},
        correctAnswer: 3,
        unanswered: true
    },
    {
        question: "What do you have when you're sciapodous?",
        answers: {        
            answer1: "a. Huge nose",
            answer2: "b. Huge chin",
            answer3: "c. Huge feet",
            answer4: "d. Huge ears"},  
        correctAnswer: 2,
        unanswered: true
    },
    {
        question: "What are you full of when you're gambrinous?",
        answers: { 
            answer1: "a. Beer",
            answer2: "b. Joy",
            answer3: "c. Chicken",
            answer4: "d. Sweat"}, 
        correctAnswer: 0,
        unanswered: true
    },
    {
        question: "Tropoclastics is actually the science of",
        answers: {    
            answer1: "a. House keeping",
            answer2: "b. Ancient writing",
            answer3: "c. Breaking habits",
            answer4: "d. Eavesdropping"},    
        correctAnswer: 2,
        unanswered: true
    },
    {
        question: "What do you most fear in hormephobia?",
        answers: { 
            answer1: "a. Saliva",
            answer2: "b. Shock",
            answer3: "c. Static",
            answer4: "d. Silence"},    
        correctAnswer: 1,
        unanswered: true
    },
    {
        question: "What does ponophobia mean?",
        answers: { 
            answer1: "a. The fear of overheating",
            answer2: "b. The fear of oversleeping",
            answer3: "c. The fear of overthinking",
            answer4: "d. The fear of overworking"},    
        correctAnswer: 3,
        unanswered: true
    },
    {
        question: "Iatrapistia is the lack of faith in what?",
        answers: { 
            answer1: "a. The medical system",
            answer2: "b. The judicial system",
            answer3: "c. The educational system",
            answer4: "d. The legal system"},    
        correctAnswer: 0,
        unanswered: true
    },
    {
        question: "Where is the dactylion?",
        answers: { 
            answer1: "a. Thumb",
            answer2: "b. Forefinger",
            answer3: "c. Middle finger",
            answer4: "d. Ring finger"},    
        correctAnswer: 2,
        unanswered: true
    }];




//Pseudocode
//When user clicks game start, a gameOn boolean gets set to true
//The first question from the list and corresponding actions populate the specified HTML elements
//The timer starts counting down from 30 seconds
//The user must select an answer from the answer list before the 30 seconds elapsed, or the question is counted as wrong
//The user clicks on the answer to choose their guess
//The guess value is compared against the correctAnswer value in the array for that question.
//If the user's guess is equal to the correctAnswer value, then the correct answer counter increases
//If the user's guess is not equal to the correctAnswer value, the incement the incorrect answer counter
//Go on to the next unanswered question
//Repeat until there are no more unanswered questions (end of the quiz array)
//Show a summary page to display the user stats

//----------------Timer---------------------------------------------------------------------------
var clockRunning = false;

var timer = {

    allottedTime: 10,

    countdownStart: function() {
        if (!clockRunning) {
            timer.intervalId = setInterval(timer.decreaseTime, 1000);
            clockRunning = true;
            }
        console.log("Hello!")
    },
    decreaseTime: function() {
        if(timer.displayTime == 0) {
            timerUp(timer.intervalId);
        } else {
        timer.displayTime = timer.allottedTime--;
        $("#time").text(timer.displayTime);
        }
        console.log(timer.displayTime);
    }

};

//----------------Quiz---------------------------------------------------------------------------

var count = 0;
var guessedRight = 0;
var guessedWrong = 0;
var gameOn = false;
var quizLength = quiz.length;


$("button").on('click',function(){
    gameOn = true;
    runGame();
    $('#startbutton').remove();
    $('.timer').append("<div class='timerbox' id='time'></div>");
    timer.countdownStart();
});



function runGame(){
 if(gameOn) {
    displayQuestion();}
};

function timerUp(id) {
    increaseCounter();;
    guessedWrong = guessedWrong + 1
    alert("Sorry, out of time!")
    clearInterval(id);
    displayQuestion();
    };

function increaseCounter() {
    count = count + 1;
};


function displayQuestion(){
    console.log("Length" + quizLength);
    console.log("Count" + count);


    if(count == quizLength){
        $('.question').remove();
        $('.answer').remove();
        gameOn = false;
        displaySummary();
    } 
    else{
        $('#question').html(quiz[count].question);
        $('#answer1').html(quiz[count].answers.answer1);
        $('#answer2').html(quiz[count].answers.answer2);
        $('#answer3').html(quiz[count].answers.answer3);
        $('#answer4').html(quiz[count].answers.answer4);
        timer.allottedTime = 10;
        timer.displayTime = timer.allottedTime;
        clockRunning = false;
        timer.countdownStart();
    }


};
    

    $('.guess').on('click',function(){

       var userGuess = $(this).attr("data-answer");
       var correctAnswer = quiz[count].correctAnswer;
       console.log(timer.displayTime);

       if(userGuess == correctAnswer) {
            increaseCounter();
            guessedRight = guessedRight + 1
            console.log("UserGuess:" + userGuess);
            console.log("CorrectGuess:" + correctAnswer); 
            console.log("Count:" + count);
            console.log("Right:" + guessedRight); 
            alert("Your answer was correct!");
            displayQuestion();

       } else if(userGuess !=  correctAnswer) {
            increaseCounter();
            guessedWrong = guessedWrong + 1
            console.log("UserGuess:" + userGuess);
            console.log("CorrectGuess:" + correctAnswer); 
            console.log("Count:" + count);
            console.log("Wrong:" + guessedWrong); 
            console.log("Right:" + guessedRight);            
            alert("Sorry, your answer was incorrect!")
            displayQuestion();
       } 

    });

function displaySummary() {

    var summaryDiv = $('<div>');
    summaryDiv.addClass('summary');

    var incorrect = $('<div>').text("Incorrect: " + guessedWrong);
    var correct = $('<div>').text("Correct: " + guessedRight);
    var percentCorrect = $('<div>').text("Guessed Correctly: " + guessedRight/count);          


    // var image = $("<img>");
    // image.attr("src",//set this equal to an image to display);

    summaryDiv.append(incorrect);
    summaryDiv.append(correct);
    summaryDiv.append(percentCorrect);
    // summaryDiv.append(image);
    $('.main').append(summaryDiv);  
};


});