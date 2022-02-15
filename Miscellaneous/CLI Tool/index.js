#!usr/bin/env node

import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import gradient from "gradient-string";
import inquirer from "inquirer";
import { createSpinner } from "nanospinner";
console.log(chalk.bgGreen("Hello"));

let playername;

const sleep = (ms = 1) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow("Welcome to the Game \n");

    await sleep();
    rainbowTitle.stop();
}

await welcome();

async function askName() {
    const answers = await inquirer.prompt({
        name: "player_name",
        type: "input",
        message: "What is your name?",
    });
    const playerName = await answers["player_name"];
    return playerName;
}

let p = await askName();

async function question1() {
    const answers = await inquirer.prompt({
        name: "question_1",
        type: "list",
        message: "JavaScript was created in 10 days then released on\n",
        choices: ["May 23rd 1195", "24/11/1995", "04/12/1995", "Dec 17 1996"],
    });

    return handleAnswer(answers.question_1 == "Dec 17 1996");
}

await question1();

async function handleAnswer(isCorrect) {
    const spinner = createSpinner("Checking Answer").start();
    console.log("\nhere", isCorrect, "\n");
    await sleep();

    if (isCorrect) {
        console.log("here");
        spinner.success({ text: `Nice work ${p}` });
    } else {
        spinner.error({ text: `Game over, you lose ${p}` });
        process.exit(1);
    }
}

async function question2() {
    const answers = await inquirer.prompt({
        name: "question_2",
        type: "list",
        message: 'What is x? var x = 1_1 + "1" + Number(1)\n',
        choices: ["4", '"4"', '"1111"', "69420"],
    });
    return handleAnswer(answers.question_2 === '"1111"');
}

await question2();

async function question3() {
    const answers = await inquirer.prompt({
        name: "question_3",
        type: "list",
        message: `What is the first element in the array? ['🐏', '🦙', '🐍'].length = 0\n`,
        choices: ["0", "🐏", "🐍", "undefined"],
    });

    return handleAnswer(answers.question_3 === "undefined");
}

await question3();

function winner() {
    console.clear();
    const msg = `Congrats, ${p}!\n $1, 000, 000`;

    figlet(msg, (err, data) => {
        console.log(gradient.pastel.multiline(date));
    });
}
