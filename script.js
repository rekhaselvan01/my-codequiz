//when user clicks on start quiz button
// step1:using query selector to fetch button element and assign it to a variable
var btnStartQuiz = document.querySelector("#btnstart-codequiz");
console.log("hello world");
//write a function to clear the previous form and display the next form
function clearFormFunction(){
    console.log("i am inside clearform function");
document.getElementById("codequiz-form").innerHTML = "";

}
//step3:write the function: startCodeQuiz
function startCodeQuiz(event){
    event.preventDefault();
    clearFormFunction();
    
    console.log("i am inside startcodequiz function");
    codeQuestionAnswers();
}
/* step 4:write a fucntion to dynamically create a para for questions and 
4 button choices for answer */

function codeQuestionAnswers(){
console.log("i am inside codequestion function");   
var body = document.body; 
var outerdivEl = document.createElement("div");
var h1El = document.createElement("h1");
var pEl = document.createElement("p");
var btnEl1 = document.createElement("button");
var btnEl2 = document.createElement("button");
var btnEl3 = document.createElement("button");
var btnEl4 = document.createElement("button");
var displaydiv = document.createElement("div")
//assign values to the newly created elements
h1El.textContent="question1";
pEl.textContent="commonly used datatypes do not include _______."
btnEl1.textContent="String";
btnEl2.textContent="Numbers";
btnEl3.textContent="undefined";
btnEl4.textContent="boolean";

//append the new elements to the body
body.appendChild(outerdivEl);
outerdivEl.appendChild(h1El);
outerdivEl.appendChild(pEl);
outerdivEl.appendChild(btnEl1);
outerdivEl.appendChild(btnEl2);
outerdivEl.appendChild(btnEl3);
outerdivEl.appendChild(btnEl4);
outerdivEl.appendChild(displaydiv);


//set attributes to the dynamically created elements
//outerdivEl.setAttribute("style", "display: flex;justify-content: center");
outerdivEl.setAttribute("style","width:50%; display:center");
btnEl1.setAttribute("style","color: white;font-size: 20px; background-color: blue; padding:5px;display:flex-block;margin-left:35px;justify-content:center;align-items:right");
btnEl2.setAttribute("style","color: white;font-size: 20px; background-color: blue; padding:5px; margin-left:35px;display: block");
btnEl3.setAttribute("style","color: white;font-size: 20px; background-color: blue; padding:5px; margin-left:35px;display: block");
btnEl4.setAttribute("style","color: white;font-size: 20px; background-color: blue; padding:5px; margin-left:35px;display: block");

}
//step2: using addeventlistener to listen to the submit button
btnStartQuiz.addEventListener("click",startCodeQuiz);