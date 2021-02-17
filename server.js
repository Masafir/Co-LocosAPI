var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
var { addUser, getUsers} = require('./data/users');
var { addGroup, getGroups} = require('./data/groups');

var cors = require('cors');
 
// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type User {
    id: Int,
    username: String,
    password: String
    name: String,
    surname: String,
    age: String,
    groupId: Int
  },

  type Group {
    id: Int,
    name: String
  },

  type List {
    id: Int,
    listItem : [List]
  },

  type CommonAccount {
    id: Int,
    users: [User]
  },

  type Task {
    id: Int, 
    tasks: [Task]
  },


  type Query {
    hello: String,
    users: [User],
    groups: [Group],
    lists: [List],
    accounts: [CommonAccount],
    tasks: [Task]
  }

  type Mutation {
    addUser(username: String, password: String, name: String, surname:String, age: String, groupId: Int): String,
    addGroup(name: String): String
  }
`);
 
// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },

  users: () => {
    return getUsers();
  },

  addUser: args => {
    const {username, password, name, surname, age, groupId} = args;
    const newUser = addUser(username, password, name, surname, age, groupId);
    return `Created: ${newUser.id} ${newUser.username} ${newUser.password} - ${
      newUser.name
    }`;
  },

  groups: () => {
    return getGroups();
  },

  addGroup: args => {
    const {name} = args;
    const newGroup = addGroup(name);
    return `Created: ${newGroup.id} ${newGroup.name}`;
  }
};
 
var app = express();
app.use(cors());
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');

function savePersonToPublicFolder(person, callback) {
  fs.writeFile('./public/person.json', JSON.stringify(person), callback);
}
