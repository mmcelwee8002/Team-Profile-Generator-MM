

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
               
                    <h2>${this.name}</h2>
                    <p>Manager</p>
                </li>
                <li class="w3-padding-16"><b>ID</b> ${this.id}</li>
                <li class="w3-padding-16"><b>Email</b> ${this.email}</li>
                <li class="w3-padding-16"><b>Office Number</b> ${this.officeNumber}</li>


            </ul>
        </div>
        `;
    }

    //Engineer Card
    const generateEngineer = function(engineer){

        return`
        < div class="w3-third w3-margin-bottom" >

            <ul class="w3-ul w3-border w3-center w3-hover-shadow">
                <li class="w3-aqua w3-xlarge w3-padding-32">

                    <h2>${this.name}</h2>
                    <p>${this.title}</p>
                </li>
                <li class="w3-padding-16"><b>ID</b> ${this.id}</li>
                <li class="w3-padding-16"><b>Email</b> ${this.email}</li>
                <li class="w3-padding-16"><b>Github</b> ${this.Github}</li>

            </ul>
        </div >
`;
    }
//Intern Card

    const generateIntern = function(intern){
    return`
        <div class="w3-third w3-margin-bottom">
            <ul class="w3-ul w3-border w3-center w3-hover-shadow">
                <li class="w3-aqua w3-xlarge w3-padding-32">

                    <h2>${this.name}</h2>
                    <<p>${this.title}</p>
                </li>
                <li class="w3-padding-16"><b>ID</b> ${this.id}</li>
                <li class="w3-padding-16"><b>Email</b> ${this.email}</li>
                <li class="w3-padding-16"><b>School</b> ${this.school}</li>
            </ul>
        </div>

    </div >
`;
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
   module.exports = templateData => {

    const {manager, engineer, intern} = templateData

   
return `
 < !DOCTYPE html >
 <html lang="en">

<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<title>Team Org chart</title>
</head>
<body>

<div class="w3-row-padding">

        <div class="w3-third w3-margin-bottom">
            <ul class="w3-ul w3-border w3-center w3-hover-shadow">
                <li class="w3-aqua w3-xlarge w3-padding-32">

            ${generateManager}
            ${generateEngineer}
            ${generateIntern}


            </ul>
        </div>

</body>

</html>
`;
};



// export to index
