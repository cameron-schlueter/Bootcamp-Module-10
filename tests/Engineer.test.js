const Engineer = require('../lib/Engineer')
describe('Engineer Test', () => {
    test ('Can set engineer values', () => {
        //take in and make an object with these values
        const employee = new Engineer ('Cameron', '123', 'cam123@gmail.com', 'gituser')
        expect(employee.github).toBe('gituser')
    });
    test ('Can get engineer values', () => {
        //take in and make an object with these values
        const employee = new Engineer ('Cameron', '123', 'cam123@gmail.com', 'gituser')
        expect(employee.getGithub()).toBe('gituser')
    })
})