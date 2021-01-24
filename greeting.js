const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greeting");



function newuser(){
    greeting.classList.add("greeting");
    form.classList.add("showing");
    form.addEventListener("submit",handleSubmit);
    
}
function handleSubmit(event){
event.preventDefault();
const currentValue = input.value;
localStorage.setItem("currentUser",currentValue);
painting(currentValue);
}

function painting(text){
    form.classList.add("form");
    form.classList.remove("showing");
    
greeting.classList.add("showing");
    greeting.innerHTML += ` ${text}!`;
}



function loadName(){
const currentUser = localStorage.getItem("currentUser");
if(currentUser !== null){
    //user active
    painting(currentUser);
}
else{
    //user inactive
newuser();

}
}



function init(){
    loadName();
}



init();