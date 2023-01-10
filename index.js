const inquirer = require("inquirer");
const fs = require("fs");
const html = require("./lib/generatehtml");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const {
  managerQuest,
  menu,
  engineerQuest,
  internQuest,
} = require("./lib/questions");
const team = [];


function promptMenu() {
  inquirer.prompt(menu).then((answer) => {
    if (answer.menuChoice === "Add an engineer to the team") {
      promptEngineer();
    }
    if (answer.menuChoice === "Add an intern to the team") {
      promptIntern();
    }
    if (answer.menuChoice === "Finalize team") {
      console.log("Your html file is in the 'dist/' folder");
      generateHtmlFile();
    }
  });
}

function promptManager() {
  inquirer.prompt(managerQuest).then((answers) => {
    const employee = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.officeNumber
    );
    team.push(employee);
    promptMenu();
  });
}

function promptEngineer() {
  inquirer.prompt(engineerQuest).then((answers) => {
    const employee = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      answers.github
    );
    team.push(employee);
    promptMenu();
  });
}

function promptIntern() {
  inquirer.prompt(internQuest).then((answers) => {
    const employee = new Intern(
      answers.name,
      answers.id,
      answers.email,
      answers.school
    );
    team.push(employee);
    promptMenu();
  });
}

const generateHtmlFile = () => {
  fs.writeFileSync("./dist/index.html", html(team).join(""), "utf-8");
};

promptManager();
