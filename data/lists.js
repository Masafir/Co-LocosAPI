var fs = require('fs');

var lists = JSON.parse(fs.readFileSync('./data/lists.json', 'utf8'));


const addList = ([listItem]) => {
    const id =  lists[lists.length - 1].id + 1;
    console.log([listItem]);
    const newlist = { id,listItem: [listItem] }
    console.log(newlist);
    lists = [...lists, newlist];
    fs.writeFile('./data/lists.json', JSON.stringify(lists),'utf8', function(err){
        if(err) throw err;
        console.log('complete');
    });
    
    return {...newlist};
}

const getLists = () => {
    return lists;
};

module.exports = {
    addList,
    getLists
};