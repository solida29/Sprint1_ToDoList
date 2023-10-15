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
    let newTask = window.prompt("Put the new task please");
    let taskIndex;
    if (newTask !== null) {
        taskIndex = searchingTask(newTask);
        console.log("task index: " + taskIndex);
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
    }
    else {
        alert("There is any task");
    }
    console.table(taskList);
}
function deleteTask() {
    let oldTask = window.prompt("Which task do you want to delete please?", "Write in full the task you want to delete");
    let taskIndex;
    if (oldTask !== null) {
        taskIndex = searchingTask(oldTask);
        console.log("task index: " + taskIndex);
        if (taskIndex >= 0) {
            taskList.splice(taskIndex, 1);
            alert("Task deleted");
        }
        else if (taskIndex === -1) {
            alert("Sorry, this task doesn't exists");
        }
    }
    else {
        alert("There is any task");
    }
    console.table(taskList);
}
function completedTask() {
    let oldTask = window.prompt("Which task do you want to complete please?", "Write here the task you want to delete");
    let taskIndex;
    if (oldTask !== null) {
        taskIndex = searchingTask(oldTask);
        if (taskIndex >= 0 && !taskList[taskIndex].completed) {
            taskList[taskIndex].task += ": done";
            taskList[taskIndex].completed = true;
            alert("Task completed");
        }
        else {
            alert("Sorry, this task doesn't exists or is completed");
        }
        console.log("task index: " + taskIndex);
    }
    else {
        alert("There is any task");
    }
    console.table(taskList);
}
function printTask() {
    let show = "";
    for (let i = 0; i < taskList.length; i++) {
        show += taskList[i].task + "<br>";
    }
    let read = document.getElementById('result');
    read.innerHTML = show;
}
//# sourceMappingURL=index_nivel3.js.map