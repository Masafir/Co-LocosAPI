var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
var { addUser, getUsers} = require('./users');
var { addGroup, getGroups} = require('./groups');
var { addlistItem, getlistItems} = require('./listItems');

var cors = require('cors');
const { getLists, addList } = require('./lists');
 
// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type User {
    id: Int,
    username: String,
    password: String,
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
    listItem : [ListItem]
  },

  type ListItem {
    id: Int,
    name: String,
    state: String,
    quantity: String
  },

  input ListItemInput {
    name: String,
    state: String,
    quantity: String
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
    listItems: [ListItem],
    accounts: [CommonAccount],
    tasks: [Task]
  }

  type Mutation {
    addUser(username: String, password: String, name: String, surname:String, age: String, groupId: Int): String,
    addGroup(name: String): String,
    addlistItem(name: String, state: String, quantity: String): String,
    addList(listItem: [ListItemInput]): [List]
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
  },

  listItems: () => {
    return getlistItems();
  },

  addlistItem: args => {
    const {name, state, quantity} = args;
    const newListItem = addlistItem(name, state, quantity);
    return `Created: ${newListItem.id} ${newListItem.name} ${newListItem.state}`;
  },

  lists: () => {
    return getLists();
  },

  addList: args => {
    const {listItems:[id, name, state, quantity]} = args;
    const newList = addList(listItems[id, name, state, quantity]);
    return `Created: ${newList.id} ${newList.name}`;
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

