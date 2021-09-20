//when user clicks on start quiz button
// step1:using query selector to fetch button element and assign it to a variable
var btnStartQuiz = document.querySelector("#btnstart-codequiz");
console.log("hello world");
//write a function to clear the previous form and display the next form
function clearFormFunction(){
    console.log("i am inside clearform function");
document.getElementById("codequiz-form").innerHTML = "";

}


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
    verifyAnswer();
}
/* step 4:write a fucntion to dynamically create a para for questions and 
4 button choices for answer */

function codeQuestionAnswers(){
console.log("i am inside codequestion function");   

//assign values to the newly created elements
h1El.textContent="question1";
pEl.textContent="commonly used datatypes do not include _______."
btnEl1.textContent="String";
btnEl2.textContent="Numbers";
btnEl3.textContent="undefined";
btnEl4.textContent="boolean";
//setting id for buttons
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
//outerdivEl.setAttribute("style", "display: flex;justify-content: center");
container.setAttribute("style","width:50%; display:center");
btnEl1.setAttribute("style","color: white;font-size: 20px; background-color: blue; padding:5px;display:flex-block;margin-left:35px;justify-content:center;align-items:right");
btnEl2.setAttribute("style","color: white;font-size: 20px; background-color: blue; padding:5px; margin-left:35px;display: block");
btnEl3.setAttribute("style","color: white;font-size: 20px; background-color: blue; padding:5px; margin-left:35px;display: block");
btnEl4.setAttribute("style","color: white;font-size: 20px; background-color: blue; padding:5px; margin-left:35px;display: block");
displaydiv.setAttribute("style","font-size:20px; font-family: arial; font-weight: bold");

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
    //buttonContainer.element.disabled = true;
   //var disableButton= document.querySelectorAll('.answerButton');
   //disableButton.setAttribute("style","disabled:true");
   //container.setAttribute.disabled = true;
}
else{
    console.log("wrong");
    displaydiv.textContent="wrong";
   // element.disabled = true;
}

}
});
}