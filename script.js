//when user clicks on start quiz button
// step1:using query selector to fetch button element and assign it to a variable
var btnStartQuiz = document.querySelector("#btnstart-codequiz");
console.log("hello world");
//write a function to clear the previous form and display the next form
function clearFormFunction(){
    console.log("i am inside clearform function");
document.getElementById("codequiz-form").innerHTML = "";

}
var score = 0;
var body = document.body; 
var container = document.createElement("div");
var h1El = document.createElement("h1");
var pEl = document.createElement("p");
var btnEl1 = document.createElement("button");
var btnEl2 = document.createElement("button");
var btnEl3 = document.createElement("button");
var btnEl4 = document.createElement("button");
var displaydiv = document.createElement("div");
//step3:write the function: startCodeQuiz
function startCodeQuiz(event){
    event.preventDefault();
    clearFormFunction();
    
    console.log("i am inside startcodequiz function");
    codeQuestionAnswers();
  // verifyAnswer();
  //container.innerHTML="";
}

var displaydiv = document.createElement("div");
/* step 4:write a fucntion to dynamically create a para for questions and 
4 button choices for answer */

function codeQuestionAnswers(){
console.log("i am inside codequestion function");   
//First question and answers
//assign values to the newly created elements


//create new elements dynamically

//setting id attribute for buttons
btnEl1.id="b1";
btnEl2.id="b2";
btnEl3.id="b3";
btnEl4.id="b4";
//setting class for buttons
btnEl1.className="answerButton";
btnEl2.className="answerButton";
btnEl3.className="answerButton";
btnEl4.className="answerButton";
container.className="buttonContainer";
//append the new elements to the body
body.appendChild(container);
container.appendChild(h1El);
container.appendChild(pEl);
container.appendChild(btnEl1);
container.appendChild(btnEl2);
container.appendChild(btnEl3);
container.appendChild(btnEl4);
container.appendChild(displaydiv);

//set attributes to the dynamically created elements

container.setAttribute("style","width:50%; display:center");
btnEl1.setAttribute("style","color: white;font-size: 20px; background-color: blue; padding:5px;display:flex-block;margin-left:35px;justify-content:center;align-items:right");
btnEl2.setAttribute("style","color: white;font-size: 20px; background-color: blue; padding:5px; margin-left:35px;display: block");
btnEl3.setAttribute("style","color: white;font-size: 20px; background-color: blue; padding:5px; margin-left:35px;display: block");
btnEl4.setAttribute("style","color: white;font-size: 20px; background-color: blue; padding:5px; margin-left:35px;display: block");
displaydiv.setAttribute("style","font-size:20px; font-family: arial; font-weight: bold");




h1El.textContent="question1";
pEl.textContent="commonly used datatypes do not include _______."
btnEl1.textContent="String";
btnEl2.textContent="Numbers";
btnEl3.textContent="undefined";
btnEl4.textContent="boolean";
verifyAnswer();


/*
//second question and answer
//assign values to the newly created elements
h1El.textContent="question2";
pEl.textContent="Arrays in Javascript can be used to store ______."
btnEl1.textContent="Methods";
btnEl2.textContent="objects";
btnEl3.textContent="Numbers and String";
btnEl4.textContent="All of the above";
verifyAnswer();
//clearFormFunction();

//Third question and answer
//assign values to the newly created elements
h1El.textContent="question3";
pEl.textContent="A very useful tool used for developing and debugging by printing content to the debugger is ________."
btnEl1.textContent="Javascript";
btnEl2.textContent="Terminal";
btnEl3.textContent="Console log";
btnEl4.textContent="All of the above";
verifyAnswer();
//clearFormFunction();

//fourth question and answer
//assign values to the newly created elements
h1El.textContent="question4";
pEl.textContent="String values must be enclosed within _______ when they are being assigned to varibales."
btnEl1.textContent="commas";
btnEl2.textContent="curly braces";
btnEl3.textContent="quotes";
btnEl4.textContent="Paranthesis";
verifyAnswer();
//clearFormFunction();

//fifth question and answer
//assign values to the newly created elements
h1El.textContent="question5";
pEl.textContent="The condition in a if/else statement is enclosed within ________."
btnEl1.textContent="commas";
btnEl2.textContent="curly braces";
btnEl3.textContent="Paranthesis";
btnEl4.textContent="quotes";
verifyAnswer();
*/

}

//step2: using addeventlistener to listen to the submit button
btnStartQuiz.addEventListener("click",startCodeQuiz);


//lets validate the answer button 
function verifyAnswer(){
    var buttonContainer = document.querySelector(".buttonContainer");

buttonContainer.addEventListener("click", function(event) {
var element = event.target;

if(element.matches("button")){

var buttonClicked= element.getAttribute("id");
console.log(buttonClicked);

var correctAnswer = "b3";
if(buttonClicked=="b3"){
    console.log("correct");
    displaydiv.textContent= "Correct";
    var score = 0;
   score = score + 5;
   console.log("The current score is  : " + score);
}
else{
    console.log("wrong");
    displaydiv.textContent="wrong";
   
}

btnEl1.disabled=true;
btnEl2.disabled=true;
btnEl3.disabled=true;
btnEl4.disabled=true;

}
});
//container.innerHTML="";
}