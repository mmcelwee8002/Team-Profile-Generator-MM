const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./HTML-template');
const { writeFile } = require('./generate-site');

let teamArray = []
const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager of the Team? (Required)',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Who is the manager of the Team?');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is Managers E-mail address? (Required)',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please enter Managers E-mail address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter your Office number? (Required)',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please enter your Office number!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter Managers ID number? (Required)',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please enter Managers ID number!');
                    return false;
                }
            }
        }

    ])
        .then(managerInput => {
            const { name, id, email, officeNumber} = managerInput;
            const manager = new Manager(name, email, id, officeNumber)

               
            teamArray.push(manager);
            console.log(manager);
        })

};
const addEmployee = () => {
    console.log(`
    =================
    Adding employees to the team
    =================
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your Employee name? (Required)',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please enter Employee full name!');
                    return false;
                }
            }
        },

        {
            type: 'list',
            name: 'role',
            message: 'Please choose your employees role',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your employees E-mail address? (Required)',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please enter your employees E-mail address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter your employees ID number? (Required)',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please enter your employees ID number!');
                    return false;
                }
            }
        },
        
        {
            type: 'input',
            name: 'github',
            message: 'Enter your Employees GitHub username? (Required)',
            when: (input) => input.role === 'Engineer',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please enter the GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's school!")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }

    ])
        .then(employeeData => {
            // data for employee types 

            let {name, role, email, id, github, school, confirmAddEmployee } = employeeData;
            let employee;

            if (role === "Engineer") {
                employee = new Engineer(name, id, email, github, role);

                console.log(employee);

            } else if (role === "Intern") {
                employee = new Intern(name, id, email, role, school);

                console.log(employee);
            }

            teamArray.push(employee);

            if (confirmAddEmployee) {
                return addEmployee(teamArray);
            } else {
                return teamArray;
            }
        })

};

addManager()
    .then(addEmployee)
    .then(teamArray => {
        return generatePage(teamArray);
    })

    .then(pageHTML => {
        return writeFile(pageHTML);
    })

    .catch(err => {
        console.log(err);
    });
