// * `officeNumber`

//     * `getRole()`   // Overridden to return `Manager`

class Engineer {
    constructor(name, github, email, id, role, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
        this.role = role
        this.officeNumber = officeNumber
    }
}

module.exports = Engineer;