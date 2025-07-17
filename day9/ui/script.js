const button1 =document.querySelector("#button");
const todolist= document.querySelector("#todo_list");

function addTodo(){
    const inputValue=document.querySelector("#myInput").value;
    const li= document.createElement("li");
    const t = document.createTextNode(inputValue);
    li.appendChild(t);
    
    if (inputValue===""){
        alert("Enter a valid value....");
        return;
    }   else{
        todolist.appendChild(li);
    }
    document.querySelector("#myInput").value=""
}

button1.addEventListener("click",addTodo);