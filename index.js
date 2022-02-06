
const inquirer = require('inquirer');
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Employee = require('./lib/Employee')
const { writeFile } = require('./utils/generate-site.js');
const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'manager',
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
            name: 'idNumber',
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
            // const { name, id, email, officeNumber } = managerInput;
            const manager = new Manager(name, id, email, officeNumber){
                this.name

            }

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
            name: 'idNumber',
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
            name: 'school',
            message: 'Please enter Intern School? (Required)',
            when: (input) => input.role === 'Intern',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please enter Intern school!');
                    return false;

                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter your employees Office number? (Required)',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please enter your employees Office number!');
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
    ])
        // .then(employeeData => {
        //     let { name, github, email, idNumber, role, officeNumber } = employeeData
        //     let employee;

        //     if ('role === Engineer') {
        //        class Engineer = new Engineer(name, idNumber, email, github, officeNumber){
        //             this.name = name;
        //             this.idNumber = idNumber;
        //             this.email = email;
        //             this.github = github;
        //             this.officeNumber = officeNumber
        //         }
        //         console.log(employee)
        //     } else if (role === 'Intern') {
        //         employee = new Intern(name, idNumber, email, school, officeNumber)

        //     }
        //     teamArray.push(employee);
        //     if (confirmEmployee) {
        //         return addEmployee(teamArray);
        //     } else {
        //         return teamArray
        //     }
        // }
        //     // })
        // )
    }
//function to generate HTML

    addManager()
        .then(addEmployee)
        .then(teamArray => {
            return gernerateHTML(teamArray);
        })

        .then(pageHTML => {
            return writeFile(pageHTML);
        })
        // .then(writeFileResponse => {
        //     console.log(writeFileResponse);
        //     return copyFile();
        // })
        // .then(copyFileResponse => {
        //     console.log(copyFileResponse);
        // })
        .catch(err => {
            console.log(err);
        });
