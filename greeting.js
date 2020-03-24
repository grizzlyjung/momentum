const nameForm = document.querySelector(".name_form"),
    input = nameForm.querySelector("input")

function handlesubmit(event){
    event.preventDefault()
    const value = input.value
    localStorage.setItem("name",value)
    paintName(value)
}

function inputName(){
    nameForm.addEventListener("submit",handlesubmit)
}    

function paintName(text){
    nameForm.innerHTML = `Hello ${text}`
}

function loadName(){
const name = localStorage.getItem("name")
if(name === null){
    inputName()
}else{
    paintName(name)
   }
}

function init(){
loadName()
}
init()