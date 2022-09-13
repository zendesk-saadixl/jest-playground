const functions = require('./functions');

// toBe
it('Adds 2 + 2 to equals 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

// not toBe
it('Adds 2 + 2 to NOT equals 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

// toBeNull
it('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

// toBeFalse
it('Should be falsy', () => {
    expect(functions.checkValue()).toBeFalsy();
});

// toEqual
it('User should be John Doe', () => {
    expect(functions.crateUser()).toEqual({
        firstName: 'John',
        lastName: 'Doe'
    });
});

// Less than and greater than
it('Should be under 3500', () => {
    const load1 = 900;
    const load2 = 1100;
    expect(load1 + load2).toBeLessThan(9000);
});

// Regex
it('There is no I in team', () => {
    expect('team').not.toMatch(/I/i);
});

// Arrays
it('Admin should be in usersnames', () => {
    userNames = ['lewis', 'carlos', 'charles', 'admin'];
    expect(userNames).toContain('admin');
});