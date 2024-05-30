function add() {
    let inputbox = document.getElementById("todoask");
    let container = document.getElementById("container");
    
    if (inputbox.value === "") {
        alert("Enter something");
    } else {
        let li = document.createElement("li");
        
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", function() {
            if (checkbox.checked) {
                li.style.textDecoration = "line-through";
            } else {
                li.style.textDecoration = "none";
            }
        });
        li.appendChild(checkbox);
        let taskText = document.createElement("span");
        taskText.textContent = inputbox.value;
        li.appendChild(taskText);
        
   
        let del = document.createElement("button");
        del.innerHTML = "DELETE";
        del.addEventListener("click", function() {
            container.removeChild(li);
        });
        li.appendChild(del);

        let edit = document.createElement("button");
        edit.textContent = "EDIT";
        edit.addEventListener("click", function() {
            let newText = prompt("Edit task:", taskText.textContent);
            if (newText !== null && newText.trim() !== "") {
                taskText.textContent = newText;
            } else {
                alert("Please enter a task name.");
            }
        });
        li.appendChild(edit);


        container.appendChild(li);


        inputbox.value = "";
    }
}

document.getElementById("todoask").addEventListener("keydown", function(e) {
    if (e.key === "ArrowDown" || e.key === "Enter" || e.key === "Alt" || e.key === "Ctrl") {
        add();
    }
});




