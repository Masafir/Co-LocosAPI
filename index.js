var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

var fs = require('fs');

const colocs = require('./coloc.json');

// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var app = express();
app.use(cors());
app.get('/colocs', (req, res)=>{
    let colocSearch = colocs.find(e => e.name == req.query.group);
    res.send(colocSearch);
});
app.get('/getcolocs',(req,res)=>{
    res.send(colocs);
});

app.post("/task", jsonParser, (req, res, err)=>{
    // colocs.push(req.body);
    try {
        console.log(req)
        let colocSearch = colocs.find(e => e.name == req.body.coloc);
        let colocIndex = colocs.findIndex(t => t.name == req.body.coloc);
        let newGroupColoc = [...colocs];
        console.log(colocSearch)
        if(colocSearch && colocSearch != undefined){
            let taskIndex = colocSearch.tasks.findIndex(t => t.value == req.body.task.value)
            let newTask = {}
            if (taskIndex > 0){
                let taskSearch = colocSearch.tasks[taskIndex];
                newTask = req.body.task;
                colocSearch.tasks.splice(taskIndex, 1, newTask);
                newGroupColoc.splice(colocIndex,1, colocSearch);
                let data = JSON.stringify(newGroupColoc);
                fs.writeFileSync('./coloc.json', data, err => {
                    console.log(err);
                })
            }
            else {
                newTask = req.body.task;
                colocSearch.tasks.push(newTask);
                newGroupColoc.splice(colocIndex,1, colocSearch);
                let data = JSON.stringify(newGroupColoc);
                fs.writeFileSync('./coloc.json', data, err => {
                    console.log(err);
                })
            }
        }
        else {
            return ("no coloc")  
        }

        res.send("ok")
        res.status(200)
    }
    catch(error){
        return res.status(400).json({ error: error.toString() });
    }


});

app.post("/user", jsonParser (req, res)=>{
    try {
        console.log(req)
        let colocSearch = colocs.find(e => e.name == req.body.coloc);
        let colocIndex = colocs.findIndex(t => t.name == req.body.coloc);
        let newGroupColoc = [...colocs];
        console.log(colocSearch)
        if(colocSearch && colocSearch != undefined){
            let taskIndex = colocSearch.tasks.findIndex(t => t.value == req.body.task.value)
            let newUser = {}
            if (taskIndex > 0){
                let taskSearch = colocSearch.tasks[taskIndex];
                newTask = req.body.task;
                colocSearch.tasks.splice(taskIndex, 1, newTask);
                newGroupColoc.splice(colocIndex,1, colocSearch);
                let data = JSON.stringify(newGroupColoc);
                fs.writeFileSync('./coloc.json', data, err => {
                    console.log(err);
                })
            }
            else {
                newTask = req.body.task;
                colocSearch.tasks.push(newTask);
                newGroupColoc.splice(colocIndex,1, colocSearch);
                let data = JSON.stringify(newGroupColoc);
                fs.writeFileSync('./coloc.json', data, err => {
                    console.log(err);
                })
            }
        }
        else {
            return ("no coloc")  
        }

        res.send("ok")
        res.status(200)
    }
    catch(error){
        return res.status(400).json({ error: error.toString() });
    }
});

app.post("/users", (req, res)=>{
    
});

app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/');


