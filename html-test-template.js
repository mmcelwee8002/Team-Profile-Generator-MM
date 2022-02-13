// const generateManager = function (manager) {
const generateManager = manager => {

    return `
        <div class="w3-container w3-deep-orange w3-center">
        <h2>My Team</h2>
        </div>

        <div class="w3-row-padding">

        <div class="w3-third w3-margin-bottom">
            ${manager
            .map(({ name, id, email, officeNumber }) => {
                return `
                <ul class="w3-ul w3-border w3-center w3-hover-shadow">
                    <li class="w3-aqua w3-xlarge w3-padding-32">
                        <h2>${name}</h2>
                        <p>Manager</p>
                    </li>
                    <li class="w3-padding-16"><b>ID</b> ${id}</li>
                    <li class="w3-padding-16"><b>Email</b> ${email}</li>
                    <li class="w3-padding-16"><b>Office Number</b> ${officeNumber}</li>
                    </li>
                </ul>
        
        </div>
        
                `;
            })
     
};`}