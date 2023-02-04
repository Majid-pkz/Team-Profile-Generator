
// packages needed for this application
const inquirer = require('inquirer');
const fs= require('fs');
const generateManager = require("./dist/page")
const path = require('path');
const emailValidator = require('email-validator');


const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const questions = require("./src/questions");
const members=[];

// const karmand = new Engineer("Majid",234,"maj@g.com");

// inquirer.prompt(questions.questionsIntern)
function writeFile(file, data) {
    return fs.writeFileSync(path.join(process.cwd(), file), data)
}


function init() {
    inquirer.prompt(questions.questionsManager).then((answers) => {
       console.log(answers) ;
       const manager=new Manager(answers.name,answers.id,answers.email,answers.officeNumber)
       members.push(manager)
       console.log(members)
       console.log('çreating a readme, one sec')
       writeFile(`trial.html`, generateManager(members),'utf-8' )

   })
   

}
init()

