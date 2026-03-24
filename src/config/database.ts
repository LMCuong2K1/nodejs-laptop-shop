
//get the client
import mysql from 'mysql2/promise';


const getConnection = async()=>{
        //create the connection to database
        try{
        const connection = await mysql.createConnection({
            port:3306,
            host:'localhost',
            user:'root',
            password: 'Luumanhme22112001@',
            database:'nodejspro'
        });
        console.log(">>> DB connected!");
        const [results,fields]  = await connection.query('SELECT * FROM users');
        console.log(results);
        console.log(fields);
    }
    catch(err){
        console.log(err);
    }
}
    


export default getConnection;