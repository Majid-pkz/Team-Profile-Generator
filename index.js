
// packages needed for this application
const inquirer = require('inquirer');
const fs= require('fs');


const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const questions = require("./src/questions");

// const karmand = new Engineer("Majid",234,"maj@g.com");

inquirer.prompt(questions.questionsIntern)