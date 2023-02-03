
// an array of questions for user input

const questionsManager = [
    { 
        type:'input',         
        message: 'What is the manager name?',
        name:'managerName',
    },
    { 
        type:'input',         
        message: 'what is the manager id?',
        name:'managerId',
    },
    { 
        type:'input',         
        message: 'What is the manager email?',
        name:'managerEmail',
    },
    { 
        type:'input',         
        message: 'What is the Manager office Number?',
        name:'officeNumber',
    }

]
const questionsEmployee = [
    { 
        type:'input',         
        message: 'What is the Employee name?',
        name:'name',
    },
    { 
        type:'input',         
        message: 'what is the Employee id?',
        name:'id',
    },
    { 
        type:'input',         
        message: 'What is the Employee email?',
        name:'email',
    }

]
const questionsEngineer = [
    { 
        type:'input',         
        message: 'What is the Engineer name?',
        name:'EngineerName',
    },
    { 
        type:'input',         
        message: 'what is the Engineer id?',
        name:'EngineerId',
    },
    { 
        type:'input',         
        message: 'What is the Engineer email?',
        name:'email',
    },
    { 
        type:'input',         
        message: 'What is the Engieer github username?',
        name:'EngineerGithub',
    }

]
const questionsIntern = [
    { 
        type:'input',         
        message: 'What is the Intern name?',
        name:'internName',
    },
    { 
        type:'input',         
        message: 'what is the Intern id?',
        name:'internId',
    },
    { 
        type:'input',         
        message: 'What is the Intern email?',
        name:'internEmail',
    },
    { 
        type:'input',         
        message: 'What is the Intern school?',
        name:'school',
    }

]
const EmployeeType = [
    { 
        type:'list',         
        message: 'which type of team member would you like to add?',
        name:'type',
        choices:['Engineer','Intern']
    }

]


module.exports.questionsManager = questionsManager;
module.exports.questionsEmployee = questionsEmployee;
module.exports.questionsEngineer = questionsEngineer;
module.exports.EmployeeType = EmployeeType;
module.exports.questionsIntern =questionsIntern;