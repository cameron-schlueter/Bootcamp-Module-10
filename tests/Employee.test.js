const exp = require('constants');
const Employee = require('../lib/Employee')
describe('Employee Test', () => {
    test ('Can set employee values', () => {
        //take in and make an object with these values
        const employee = new Employee ('Cameron', '123', 'cam123@gmail.com')
        expect(employee.name).toBe('Cameron')
        expect(employee.id).toBe('123')
        expect(employee.email).toBe('cam123@gmail.com')
    });
    test ('Can get employee values', () => {
        //take in and make an object with these values
        const employee = new Employee ('Cameron', '123', 'cam123@gmail.com')
        expect(employee.getName()).toBe('Cameron')
        expect(employee.getId()).toBe('123')
        expect(employee.getEmail()).toBe('cam123@gmail.com')
        expect(employee.getRole()).toBe('Employee')
    });
    
})