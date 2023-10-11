"use strict";
const taskList = [
    {
        task: "poner la lavadora",
        completed: false
    },
    {
        task: "preparar la cena",
        completed: false
    },
    {
        task: "hacer surf",
        completed: false
    }
];
console.table(taskList);
function searchingTask(newTask) {
    let found = false;
    let index = -1;
    let i = 0;
    while (i < taskList.length && !found) {
        if (newTask == taskList[i].task) {
            index = i;
            found = true;
        }
        i++;
    }
    return index;
}
function addTask() {
    let newTask = (prompt("Put the new task please")).toLowerCase();
    let taskIndex = searchingTask(newTask);
    if (taskIndex === -1) {
        const addNewTask = {
            task: newTask,
            completed: false
        };
        taskList.push(addNewTask);
        alert("Task added successfully");
    }
    else {
        alert("Sorry but this task exists");
    }
    console.table(taskList);
}
function deleteTask() {
    let oldTask = prompt("Which task do you want to delete please?");
    let taskIndex = searchingTask(oldTask);
    console.log("task index: " + taskIndex);
    if (taskIndex >= 0) {
        taskList.splice(taskIndex, 1);
        alert("Task deleted");
    }
    else {
        alert("Sorry, this task doesn't exists");
    }
    console.table(taskList);
}
function completedTask() {
    let oldTask = prompt("Which task do you want to complete please?");
    let taskIndex = searchingTask(oldTask);
    console.log("task index: " + taskIndex);
    if (taskIndex >= 0 && !taskList[taskIndex].completed) {
        taskList[taskIndex].task += ": done";
        taskList[taskIndex].completed = true;
        alert("Task completed");
    }
    else {
        alert("Sorry, this task doesn't exists or is completed");
    }
    console.table(taskList);
}
function printTask() {
    let show = "";
    for (let i = 0; i < taskList.length; i++) {
        show += (i + 1) + ". " + taskList[i].task + "<br>";
    }
    document.getElementById('result').innerHTML = show;
}
//# sourceMappingURL=index_nivel3.js.map