const Employee = require('./Employee')
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github
    }
    getGithub(){
        return this.github
    }
    getRole(){
        return 'Engineer'
    }
}
//required to pass test that we wrote
module.exports = Engineer