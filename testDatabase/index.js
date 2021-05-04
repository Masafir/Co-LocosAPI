const mysql = require('mysql');
const connection = mysql.createConnection({
  host: '217.160.244.27',
  user: 'colocos_dev',
  password: 'Colocos_dev2021',
  database: 'colocos_developer'
});
connection.connect((err) => {
  if (err) {
    console.log("cannot connect to db");
    throw err;
  }
  console.log('Connected!');
});

connection.query('SELECT * from account', function(err, rows, fields) {
  if(err) console.log(err);
  console.log('The solution is: ', rows,fields);
  connection.end();
});