
const Employee = require('./Employee')
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
    }
    getOfficeNumber(){
        return this.officeNumber
    }
    getRole(){
        return 'Manager'
    }
}
//required to pass test that we wrote
module.exports = Manager