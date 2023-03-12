const Manager = require('../lib/Manager')
describe('Manager Test', () => {
    test ('Can set Manager values', () => {
        //take in and make an object with these values
        const employee = new Manager ('Cameron', '123', 'cam123@gmail.com', 'officenumb')
        expect(employee.officeNumber).toBe('officenumb')
    });
    test ('Can get Manager values', () => {
        //take in and make an object with these values
        const employee = new Manager ('Cameron', '123', 'cam123@gmail.com', 'officenumb')
        expect(employee.getOfficeNumber()).toBe('officenumb')
    })
})