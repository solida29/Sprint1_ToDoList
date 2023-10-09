import { ChildProcessWithoutNullStreams } from "child_process";

// Array de objetos de las tareas
interface Task {
    task: string, 
    completed: boolean 
}

const taskList: Task[] = [
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

// Buscador de indice de las tareas en el array taskList
function searchingTask(newTask: string) : number {
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

// Agregar tareas
function addTask() {
    const prompt = require('prompt-sync')();
    let newTask  = (prompt("Put the new task please").toLowerCase());
    let taskIndex = searchingTask(newTask.toLowerCase());

    if (taskIndex === -1) {
        const addNewTask: {task: string, completed: boolean} = 
            {
            task: newTask,
            completed: false
            }
        
        taskList.push(addNewTask);
        console.log("Task added successfully");
    } else {
        console.log("Sorry but this task exists");
    }
    console.table(taskList);
}

// Borrar tareas
function deleteTask() {
    const prompt = require('prompt-sync')();
    let oldTask = prompt("Which task do you want to delete please?").toLowerCase();
    let taskIndex = searchingTask(oldTask);

    console.log("task index: " + taskIndex);

    if (taskIndex >= 0) {
        taskList.splice(taskIndex, 1);
        console.log("Task deleted");

    } else {
        console.log("Sorry, this task doesn't exists");
    }
    console.table(taskList);
}

// Completar tareas
function completedTask() {
    const prompt = require('prompt-sync')();
    let oldTask = prompt("Which task do you want to complete please?");
    let taskIndex = searchingTask(oldTask);

    console.log("task index: " + taskIndex);

    if (taskIndex >= 0 && !taskList[taskIndex].completed) {
        taskList[taskIndex].task += ": done";
        taskList[taskIndex].completed = true;
        console.log("Task completed");

    } else {
        console.log("Sorry, this task doesn't exists or is completed");
    }
    console.table(taskList);
}

// Imprimir tareas
function printTask() {
    let show = "";

    for (let i: number = 0; i < taskList.length; i++) {
        show += (i + 1) + ". " + taskList[i].task + "\n";
    }
    console.log(show);
}