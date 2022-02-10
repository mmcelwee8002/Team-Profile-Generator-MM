// * `officeNumber`

//     * `getRole()`   // Overridden to return `Manager`

class Engineer {
    constructor(name, github, email, id, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
        this.role = role
        
    }
}

module.exports = Engineer;