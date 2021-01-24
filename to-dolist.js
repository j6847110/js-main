const todo_form = document.querySelector(".js-toDoForm");
const todo_input = todo_form.querySelector("input");
const todo_list = document.querySelector(".js-toDoList");

//local storage -todo
let todo_LS = [];


function deleteToDo(event){
const btn = event.target;
const li=btn.parentNode;
todo_list.removeChild(li);
const cleanToDos = todo_LS.filter(function(todo) {
    return todo.id !== parseInt(li.id);
});
todo_LS = cleanToDos;
saveTodo();

}


function saveTodo(){
    localStorage.setItem("toDos",JSON.stringify(todo_LS));
}

function paintTodo(text){
const li = document.createElement("li");
const delBtn = document.createElement("button");
const span = document.createElement("span");
const newId = todo_LS.length+1;
delBtn.innerHTML = "X";
delBtn.addEventListener("click",deleteToDo);
span.innerText = `# ${text}`;
li.appendChild(span);
li.appendChild(delBtn);
li.id=newId;
todo_list.appendChild(li);
const toDoObj = {
    text:text,
    id:newId
}
todo_LS.push(toDoObj);
saveTodo();
}


function handleSubmit(event){
    event.preventDefault();
    const currentValue=todo_input.value;
    paintTodo(currentValue);
    todo_input.value="";
}

function LoadtoDos(){
    const loadToDos = localStorage.getItem("toDos");
    if(loadToDos===null){

    }
    else{
        const parse_toDos = JSON.parse(loadToDos);
parse_toDos.forEach(function(toDo){
    paintTodo(toDo.text);
});
    }
}


function init(){
LoadtoDos();
todo_form.addEventListener("submit",handleSubmit);
}

init();