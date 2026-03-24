import getConnection from '../config/database';

const getAllUsers  = async()=>{
    const connection = await getConnection();
    try{
        const [results,fields]  = await connection.query('SELECT * FROM users');
        return results;
    }
    catch(err){
        console.log(err);
        return [];
    }
}

const postNewUser = async(name:string,email:string,address:string)=>{
    const connection = await getConnection();
    try{
        const sql = 'INSERT INTO users (name,email,address) VALUES (?,?,?)';
        const [results,fields]  = await connection.execute(sql, [name,email,address]);
        return results;
    }
    catch(err){
        console.log(err);
        return [];
    }
}


export {
    getAllUsers,postNewUser

}