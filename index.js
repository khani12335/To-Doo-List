#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "what you to add in todos ?",
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to add more ?",
            default: "true",
        },
    ]);
    todos.push(addTask.todo);
    condition = addTask.addMore;
    console.log(chalk.greenBright(todos));
}
