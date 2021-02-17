var crypto = require('crypto');
var fs = require('fs');

var users = JSON.parse(fs.readFileSync('./data/users.json', 'utf8'));

const addUser = (username,password,name, surname, age, groupId) => {
    let salt = crypto.randomBytes(16).toString('base64');
    let hash = crypto.createHmac('sha512',salt)
                                     .update(password)
                                     .digest("base64");
    
    password = salt + "$" + hash;
    const id =  users[users.length - 1].id + 1;
    const newUser = { id, username, password, name, surname, age, groupId }
    users = [...users, newUser];
    fs.writeFile('./data/users.json', JSON.stringify(users),'utf8', function(err){
        if(err) throw err;
        console.log('complete');
    });
    
    return {...newUser};
}

const getUsers = () => {
    return users;
};

module.exports = {
    addUser,
    getUsers
};