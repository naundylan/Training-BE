var toDoInput = document.getElementById("todo-input");
var toDoList = document.getElementById("todo-list");
var addButton = document.getElementById("add-button");

addButton.addEventListener("click", function() {
    var toDoText = toDoInput.value;
    if(toDoText !== "") {
        var toDoItem = document.createElement("li");
        toDoItem.textContent = toDoText;
        toDoList.appendChild(toDoItem);
        toDoInput.value = "";
        
        toDoItem.addEventListener("click", function() {
            toDoItem.classList.toggle("completed");
        });

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        toDoItem.appendChild(deleteButton);
        deleteButton.addEventListener("click", function() {
            toDoItem.remove();
        });
    }
    else {
        alert("Hãy nhập một nhiệm vụ!");
    }
});