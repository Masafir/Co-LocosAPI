var express = require('express');
var cors = require('cors');


const colocs = require('./coloc.json');


var app = express();
app.use(cors());
app.get('/colocs', (req, res)=>{
    let colocSearch = colocs.find(e => e.name == req.query.group);
    res.send(colocSearch);
});
app.get('/getcolocs',(req,res)=>{
    res.send(colocs);
});

app.post("/tasks", (req, res)=>{
    let taskSearch = colocs.find(e => e.tasks)
    colocs.push(req.body);
    res.status(200)

});

app.post("/user", (req, res)=>{
    
});

app.post("/users", (req, res)=>{
    
});

app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/');


