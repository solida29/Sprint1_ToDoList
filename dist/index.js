"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
function addTask(newTask) {
    let taskIndex = searchingTask(newTask.toLowerCase());
    if (taskIndex === -1) {
        const addNewTask = {
            task: newTask,
            completed: false
        };
        taskList.push(addNewTask);
        return "Task added successfully";
    }
    else {
        return "Sorry but this task exists";
    }
    console.table(taskList);
}
function deleteTask(oldTask) {
    let taskIndex = searchingTask(oldTask);
    console.log("task index: " + taskIndex);
    if (taskIndex >= 0) {
        taskList.splice(taskIndex, 1);
        return "Task deleted";
    }
    else {
        return "Sorry, this task doesn't exists";
    }
}
function completedTask(oldTask) {
    let taskIndex = searchingTask(oldTask);
    console.log("task index: " + taskIndex);
    if (taskIndex >= 0 && !taskList[taskIndex].completed) {
        taskList[taskIndex].task += ": done";
        taskList[taskIndex].completed = true;
        console.log("Task completed");
    }
    else {
        console.log("Sorry, this task doesn't exists or is completed");
    }
    console.table(taskList);
}
function printTask() {
    let show = "";
    for (let i = 0; i < taskList.length; i++) {
        show += (i + 1) + ". " + taskList[i].task + "\n";
    }
    return show;
}
exports.searching = searchingTask;
exports.add = addTask;
exports.list = taskList;
exports.deleteT = deleteTask;
//# sourceMappingURL=index.js.map