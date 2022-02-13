const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Matthew', '12', 'mm@gmail.com', 'mmceelwee8002', 'Manager', '1223');


    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
    
    

})