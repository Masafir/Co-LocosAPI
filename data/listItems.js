var fs = require('fs');

var listItems = JSON.parse(fs.readFileSync('./data/listItems.json', 'utf8'));


const addlistItem = (name, state, quantity) => {
    const id =  listItems[listItems.length - 1].id + 1;
    const newlistItem = { id, name , state , quantity}
    listItems = [...listItems, newlistItem];
    fs.writeFile('./data/listItems.json', JSON.stringify(listItems),'utf8', function(err){
        if(err) throw err;
        console.log('complete');
    });
    
    return {...newlistItem};
}

const getlistItems = () => {
    return listItems;
};

module.exports = {
    addlistItem,
    getlistItems
};