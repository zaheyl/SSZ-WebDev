function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value;

    if(taskText === ""){
        alert("Please enter task!");
        return;
    }

    let li = document.createElement("li");

    //li.innerText = taskText;
    li.innerHTML = `
        ${taskText}
        <button onClick="this.parentElement.remove()">
            Task Done
        </button>
    `

    document
        .getElementById("taskList")
        .appendChild(li);

    input.value = "";

}