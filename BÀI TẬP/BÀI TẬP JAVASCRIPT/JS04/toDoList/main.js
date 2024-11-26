var toDoInput = document.getElementById("todo-input");
var toDoList = document.getElementById("todo-list");
var addButton = document.getElementById("add-button");

addButton.addEventListener("click", function() {
    var toDoText = toDoInput.innerText;
    if(toDoText !== "") {
        var toDoItem = document.createElement("li");
        toDoItem.textContent = toDoText;
        toDoList.appendChild(toDoItem);
        toDoInput.value = "";       
    }
    else {
        alert("Hãy nhập một nhiệm vụ!");
    }

    
});