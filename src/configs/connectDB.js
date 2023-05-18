// get the client
import mysql from 'mysql2';

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'nodejs'
});

/* connection.query(
  'SELECT * FROM `user`',
  function(err, results, fields) {
    console.log('<< CHECK MYSQL >>');
    console.log(results); 
  }
); */

export default connection;