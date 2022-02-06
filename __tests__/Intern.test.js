const Intern = require('../lib/intern');

test('creates a Inter object', () => {
    const intern = new Intern('Matthew', '12', 'mm@gmail.com', 'intern', 'University of Minnesota');


    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.role).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
})