var crypto = require('crypto');

let users = [
    {
        id: 1,
        username: "Ced",
        password: "123",
        name: "Cedric",
        surname: "Boissinot",
        age: "21",
        groupId: 1
    },
    {
        id: 2,
        username: "Amiral",
        password: "456",
        name: "Amir",
        surname: "Lachemet",
        age: "22",
        groupId: 1

    }

];

const addUser = (username,password,name, surname, age, groupId) => {
    let salt = crypto.randomBytes(16).toString('base64');
    let hash = crypto.createHmac('sha512',salt)
                                     .update(password)
                                     .digest("base64");
    
    password = salt + "$" + hash;

    const id =  users[users.length - 1].id + 1;
    const newUser = { id, username, password, name, surname, age, groupId }
    users = [...users, newUser];
    
    return {...newUser};
}

const getUsers = () => {
    return users;
};

module.exports = {
    addUser,
    getUsers
};