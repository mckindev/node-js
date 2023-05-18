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
            address: row.address,
            phone: row.phone
          })  
        });
            console.log(' >> CHECK MYSQL: ', data);
            return res.render('index.ejs', { dataUser: data });
        }
    );
}

module.exports = {
    getHomepage
}