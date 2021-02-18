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

app.post("/user", jsonParser, (req, res, err)=>{
    try {
        console.log(req);
        let colocSearch = colocs.find(e => e.name == req.body.coloc);
        let colocIndex = colocs.findIndex(t => t.name == req.body.coloc);
        let newGroupColoc = [...colocs];
        console.log(colocSearch)
        if(colocSearch && colocSearch != undefined){
            let userIndex = colocSearch.users.findIndex(t => t.name == req.body.user.name)
            let newUser = {}
            if (userIndex > 0){
                newUser = req.body.user;
                colocSearch.users.splice(userIndex, 1, newUser);
                newGroupColoc.splice(colocIndex,1, colocSearch);
                let data = JSON.stringify(newGroupColoc);
                fs.writeFileSync('./coloc.json', data, err => {
                    console.log(err);
                })
            }
            else {
                newUser = req.body.user;
                colocSearch.users.push(newUser);
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

app.post("/updateUserTask", jsonParser, (req,res)=>{
    console.log("jsuis la");
    try {
        let colocSearch = colocs.find(e => e.name == req.body.coloc);
        let colocIndex = colocs.findIndex(t => t.name == req.body.coloc);
        let newGroupColoc = [...colocs];
        if(colocSearch && colocSearch != undefined){
            let userIndex =  colocSearch.users.findIndex(t => t.name == req.body.user.name);
            let taskIndex = colocSearch.tasks.findIndex(t => t.value == req.body.task.value);
            let newUser = {};
            if(userIndex > 0){
                console.log("user>0")
                newUser = req.body.user;
                colocSearch.users.splice(userIndex, 1, newUser);
            }
            else {
                console.log("user<0")
                newUser = req.body.user;
                colocSearch.users.push(newUser);
            }
            if(taskIndex > 0){
                console.log("taskIndex >0")
                newTask = req.body.task;
                colocSearch.tasks.splice(taskIndex,1,newTask);
            }
            else{
                console.log("taskIndex < 0")
                newTask = req.body.task;
                colocSearch.tasks.push(newTask)
            }


            newGroupColoc.splice(colocIndex,1, colocSearch);
            let data = JSON.stringify(newGroupColoc);
            console.log(data)
            fs.writeFileSync('./coloc.json', data, err => {
                console.log(err);
            })
            res.send("ok")
            res.send(200)
        }
        else {
            return "no coloc"
        }


    }
    catch(error){
        return res.status(400).json({ error: error.toString() });
    }
})

app.post("/users", (req, res)=>{
    
});

app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/');


