const Employee = require('../lib/Employee.js');


// * `name`
test('creates a Employee object', () => {
    const employee = new Employee ('Matthew', 14, 'mm@gmail.com');

    
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

})

// GIVEN a command - line application that accepts user input



//     * `id`


// test('to get the user ID listed', () =>{
//     const userID = new UserID ('1');
//     expect(userID.number).toBe('1')
// })


//     * `email`

//     * `getName()`

//     * `getId()`

//     * `getEmail()`

//     * `getRole()`   // Returns 'Employee'


