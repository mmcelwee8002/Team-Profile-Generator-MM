const User = require('../lib/User.js');


// * `name`
test('creates a user object', () => {
    const user = new User ('Matthew', 14, 'mm@gmail.com');

    
    expect(user.name).toEqual(expect.any(String));
    expect(user.id).toEqual(expect.any(Number));
    expect(user.email).toEqual(expect.any(String));

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


