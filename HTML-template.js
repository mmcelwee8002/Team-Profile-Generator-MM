//Manager card

// const generateManager = function (manager) {
const generateManager = manager => {

    return `
        <div class="w3-container w3-deep-orange w3-center">
        <h2>My Team</h2>
        </div>

        <div class="w3-row-padding">

        <div class="w3-third w3-margin-bottom">
          
                <ul class="w3-ul w3-border w3-center w3-hover-shadow">
                    <li class="w3-aqua w3-xlarge w3-padding-32">
                        <h2>${manager.name}</h2>
                        <p>Manager</p>
                    </li>
                    <li class="w3-padding-16">ID: ${manager.id}</li>
                    <li class="w3-padding-16">Email:<a href="mailto:${manager.email}">${manager.email}</a></li>
                    <li class="w3-padding-16">Office Number: ${manager.officeNumber}</li>
                    </li>
                </ul>
        
        </div>
        
                
`
}



// Engineer Card
const generateEngineer = data => {
    const engineer = data.filter(employee => employee.role == 'Engineer')

    return `
        <div class="w3-third w3-margin-bottom">

            ${engineer

            .map(({ name, role, id, email, github }) => {
                return `        

            <ul class="w3-ul w3-border w3-center w3-hover-shadow">
                <li class="w3-aqua w3-xlarge w3-padding-32">

                    <h2>${name}</h2>
                    <p>${role}</p>
                </li>


                <li class="w3-padding-16"><b>ID</b> ${id}</li>
                <li class="w3-padding-16">Email:<a href="mailto:${email}">${email}</a></li>
                <li class="w3-padding-16">Github:  <a href="github.com/${github}" target="_blank">${github}</a></li>

                </li>
            </ul>
        </div>
   `
            })

        }`
}
//Intern Card

const generateIntern = data => {
    const intern = data.filter(employee => employee.role == 'Intern')

    return `
         <div class="w3-third w3-margin-bottom">
        ${intern
            .map(({ name, role, id, email, school }) => {
                return `        
            <ul class="w3-ul w3-border w3-center w3-hover-shadow">
                <li class="w3-aqua w3-xlarge w3-padding-32">

                    <h2>${name}</h2>
                    <p>${role}</p>
                </li>


                <li class="w3-padding-16"><b>ID</b> ${id}</li>
                <li class="w3-padding-16">Email:<a href="mailto:${email}">${email}</a></li>
                <li class="w3-padding-16"><b>School: </b> ${school}</li>

                </li>
            </ul>
        </div>
            `
            })

        }`
}


//push array to page 
generateHTML = (data) => {

    // array for cards 
    pageArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.role;


        // call manager function
        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            pageArray.push(managerCard);
        }

        // call engineer function
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            pageArray.push(engineerCard);
        }

        // call intern function 
        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            pageArray.push(internCard);
        }

    }

    // joining strings 
    const teamCards = pageArray.join('')

    // return to generated page
    const generateTeam = generateTeamPage(teamCards);
    return generateTeam;
}

//final HTML

// const generateTeamPage = function (teamCards){
module.exports = teamArray => {



    
    return `
<!DOCTYPE html>
<html>
<title>Team Org Chart</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">

<body>
    <br>

    ${generateManager(teamArray[0])}
    
    ${generateEngineer(teamArray)}
    ${generateIntern(teamArray)}

        </body>
        
        </html>
`
}



// export to index