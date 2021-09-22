
// step1:using query selector to fetch button element and assign it to a variable
var container = document.querySelector(".container");
var startQuizButton = document.querySelector("#btnstart-codequiz");
var body = document.body;
var i = 0;
var globalScore = 0;
const initialCount = 0;
var questionNumber=1;


var questionArray = [
    {
        order: 1,
        QuestionNo: "Question1",
        question: "commonly used datatypes do not include _______.",
        answers: ["strings", "Numbers", "boolean", "undefined"],
        correctAnswer: "b4"
    },
    {
        order: 2,
        QuestionNo: "Question2",
        question: "Arrays in Javascript can be used to store ______.",
        answers: ["methods", "objects", "Numbers and string", "All of the above"],
        correctAnswer: "b4"
    },
    {
        order: 3,
        QuestionNo: "Question3",
        question: "A very useful tool used for developing and debugging by printing content to the debugger is ________.",
        answers: ["Javascript", "Console log", "Terminal", "All of the above"],
        correctAnswer: "b2"
    },
    {
        order: 4,
        QuestionNo: "Question4",
        question: "String values must be enclosed within _______ when they are being assigned to varibales.",
        answers: ["commas", "curly braces", "quotes", "paranthesis"],
        correctAnswer: "b4"
    },
    {
        order: 5,
        QuestionNo: "Question5",
        question: "The condition in a if/else statement is enclosed within ________.",
        answers: ["commas", "curly braces", "paranthesis", "quotes"],
        correctAnswer: "b3"
    }
];




function displayNextQuestions(count) {
   document.querySelector(".container").innerHTML = "";
    //container.textContent =questionArray[0].question;
    

    window.newContainerEl = document.createElement("div");
    var h1El = document.createElement("h1");
    var pEl = document.createElement("p");
    window.btnEl1 = document.createElement("button");
    window.btnEl2 = document.createElement("button");
    window.btnEl3 = document.createElement("button");
    window.btnEl4 = document.createElement("button");
    window.displayDiv = document.createElement("div");

    //append element

    //body.appendchild(container);
    body.appendChild(newContainerEl);
    newContainerEl.appendChild(h1El);
    newContainerEl.appendChild(pEl);
    newContainerEl.appendChild(btnEl1);
    newContainerEl.appendChild(btnEl2);
    newContainerEl.appendChild(btnEl3);
    newContainerEl.appendChild(btnEl4);
    newContainerEl.appendChild(displayDiv);
    //set attributes

    newContainerEl.setAttribute("style", "width:50%; display:center");
    btnEl1.setAttribute("style", "color: white;font-size: 20px; background-color: blue; padding:5px;margin-left:35px;display: block");
    btnEl2.setAttribute("style", "color: white;font-size: 20px; background-color: blue; padding:5px; margin-left:35px;display: block");
    btnEl3.setAttribute("style", "color: white;font-size: 20px; background-color: blue; padding:5px; margin-left:35px;display: block");
    btnEl4.setAttribute("style", "color: white;font-size: 20px; background-color: blue; padding:5px; margin-left:35px;display: block");
    displayDiv.setAttribute("style", "font-size:20px; font-family: arial; font-weight: bold");

    //setting id attribute for buttons
    btnEl1.id = "b1";
    btnEl2.id = "b2";
    btnEl3.id = "b3";
    btnEl4.id = "b4";
    newContainerEl.className="buttonContainer";


    h1El.textContent = questionArray[count].QuestionNo;
    console.log(h1El.textContent);
    pEl.textContent = questionArray[count].question;
    console.log(pEl.textContent);
    btnEl1.textContent = questionArray[count].answers[0];
    console.log(btnEl1.textContent);
    btnEl2.textContent = questionArray[count].answers[1];
    btnEl3.textContent = questionArray[count].answers[2];
    btnEl4.textContent = questionArray[count].answers[3];


    //lets validate the answer button 
var buttonContainer = document.querySelector(".buttonContainer");
buttonContainer.addEventListener("click", function (event) {
    var element = event.target;
    if (element.matches("button")) {
        var buttonClicked = element.getAttribute("id");
        console.log(buttonClicked);         
        if (buttonClicked== questionArray[count].correctAnswer) {
            console.log("correct");
            displayDiv.textContent = "Correct";
            globalScore = globalScore + 5;
            console.log(globalScore);
        }
        else {
            console.log("wrong");
            displayDiv.textContent = "wrong";
            console.log(globalScore);
        }
        console.log(globalScore);        
      /*  btnEl1.disabled = true;
        btnEl2.disabled = true;
        btnEl3.disabled = true;
        btnEl4.disabled = true;*/
    }
    count++;
        //setting id attribute for buttons
if(count<questionArray.length){
    console.log(count);
    h1El.textContent = questionArray[count].QuestionNo;
    console.log(h1El.textContent);
    pEl.textContent = questionArray[count].question;
    console.log(pEl.textContent);
    btnEl1.textContent = questionArray[count].answers[0];
    console.log(btnEl1.textContent);
    btnEl2.textContent = questionArray[count].answers[1];
    btnEl3.textContent = questionArray[count].answers[2];
    btnEl4.textContent = questionArray[count].answers[3];
} else {
    displayDiv.textContent = "The score is : " + globalScore;
}


});

}


function loopyloop(){
    displayNextQuestions(initialCount);  
}

startQuizButton.addEventListener("click", loopyloop);

