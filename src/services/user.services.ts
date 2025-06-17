import { name } from "ejs";
import getConnection from "../config/database";

const handleCreateUser = async(
    fullname: string,
    email: string,
    address: string) => {
    const connection = await getConnection();
    
    try {
        const sql = 'INSERT INTO `users`(`name`, `email`,`address`) VALUES (?, ?, ?)';
        const values = [fullname, email, address];
        const [result, fields] = await connection.execute(sql, values);
        return result;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

const getAllUsers = async() => {
    const connection = await getConnection();

    try {
        const sql = 'SELECT * FROM users';
        const [rows, fields] = await connection.execute(sql);
        return rows;
    } catch (err) {
        console.log(err);
        return [];
    }
}

const handleDeleteUser = async(id: string) =>{
    try {
    const connection = await getConnection();
  const sql = 'DELETE FROM `users` WHERE `id` = ? ';
  const values = [id];

  const [result, fields] = await connection.execute(sql, values);

  return result;
} catch (err) {
  console.log(err);
  return [];
}

}

const getUserById = async(id:string) =>{
try {
    const connection = await getConnection();
  const sql = 'SELECT * FROM `users` WHERE `id` = ?';
  const values = [id];

  const [result, fields] = await connection.execute(sql, values);
    return result[0];
} catch (err) {
  console.log(err);
  return [];
}
}
const UpdateUserById = async(id: string, 
    fullname: string,
    email: string,
    address: string
) => {
    const connection = await getConnection();
    try {
        const sql = 'UPDATE `users` SET `name` = ?, `email` = ?, `address` = ? WHERE `id` = ?';
        const values = [fullname, email, address, id];
        const [result, fields] = await connection.execute(sql, values);
        return result;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

export { handleCreateUser, getAllUsers ,handleDeleteUser,getUserById,UpdateUserById}