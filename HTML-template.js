module.exports = templateData => {
    console.log(templateData);

    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <title>Team Org chart</title>
</head>
<body>
<div class="w3-container">
    <h2>My Team</h2>
</div>

<div class="w3-row-padding">

    <div class="w3-third w3-margin-bottom">
        <ul class="w3-ul w3-border w3-center w3-hover-shadow">
            
            <li class="w3-blue w3-large w3-padding-32">
            <h2>Name</h2>
            
            <p>title</p></li>
               
            <li class="w3-padding-16"><b>ID</b> Number</li>
            <li class="w3-padding-16"><b>Email</b> Email Address</li>
            <li class="w3-padding-16"><b>Office Number</b> Office number</li>
            <li class="w3-padding-16"><b>GitHub</b> GitHub link</li>
            <li class="w3-padding-16"><b>School</b> school</li>
            </li>
            
        </ul>
    </div>








</body>
</html>
    `;

};