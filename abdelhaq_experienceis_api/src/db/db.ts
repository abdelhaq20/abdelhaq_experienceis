import mysql from "mysql2";

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'experienceis',
  timezone : 'Europe/Madrid',
  
});

export default connection;
