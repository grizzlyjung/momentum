const toDoContainer = document.querySelector(".todo_container"),
    toDoForm = toDoContainer.querySelector(".todo_form"),
    toDoInput = toDoContainer.querySelector("input")
    toDoList = toDoContainer.querySelector(".todo_list")

function handleSubmit(event){
    event.preventDefault()
    const value = toDoInput.value
    console.log(value)
    addToDo(value)
}

function addToDo(text){
    const li = document.createElement("li")
    const delBtn = document.createElement("button")
    delBtn.innerText = "❌"
    const span = document.createElement("span")
    toDoList.appendChild(li)
    li.appendChild(delBtn)
    li.appendChild(span)
    span.innerText = `${text}`
    const toDoObj = {
        toDos : text

    }
}

function inputToDo(){
    toDoForm.addEventListener("submit",handleSubmit)
}

function loadToDo(){
const toDos = localStorage.getItem("toDos")
if(toDos === null){
    inputToDo()
    }else{
    parseToDo = JSON.parse(toDos)
    addToDo(parseToDo)    
    }
}
function init(){
loadToDo()
}
init()