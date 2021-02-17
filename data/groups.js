var fs = require('fs');

var groups = JSON.parse(fs.readFileSync('./data/groups.json', 'utf8'));


const addGroup = (name) => {
    const id =  groups[groups.length - 1].id + 1;
    const newGroup = { id, name }
    groups = [...groups, newGroup];
    fs.writeFile('./data/groups.json', JSON.stringify(groups),'utf8', function(err){
        if(err) throw err;
        console.log('complete');
    });
    
    return {...newGroup};
}

const getGroups = () => {
    return groups;
};

module.exports = {
    addGroup,
    getGroups
};