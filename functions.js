const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    checkValue: ()=> null,
    crateUser: () => {
        const user = { firstName: 'John'};
        user['lastName'] = 'Doe';
        return user;
    }
};

module.exports = functions;