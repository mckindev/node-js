import { json } from "body-parser";
import connection from "../configs/connectDB";

let getHomepage = (req, res) => {

    let data = [];
    connection.query(
        'SELECT * FROM `user`',
        function(err, results, fields) {
          results.map((row) => { 
            data.push({
            id: row.id,
            username: row.username,
            anddress: row.anddress,
            phone: row.phone
          })  
        });
            return res.render('index.ejs', { dataUser: JSON.stringify(data) });
        }
    );
}

module.exports = {
    getHomepage
}