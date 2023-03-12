const Intern = require('../lib/Intern')
describe('Intern Test', () => {
    test ('Can set Intern values', () => {
        //take in and make an object with these values
        const employee = new Intern ('Cameron', '123', 'cam123@gmail.com', 'university')
        expect(employee.school).toBe('university')
    });
    test ('Can get Intern values', () => {
        //take in and make an object with these values
        const employee = new Intern ('Cameron', '123', 'cam123@gmail.com', 'university')
        expect(employee.getSchool()).toBe('university')
    })
})