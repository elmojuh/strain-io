const mysql = require("mysql2");

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'strainIo'
});

conn.connect((error)=> {
    if(error){
        return console.log(error);
    }
    return console.log("Connected")
})
conn.query("USE strainIO");
module.exports = conn;
