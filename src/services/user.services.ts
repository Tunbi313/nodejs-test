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

export { handleCreateUser, getAllUsers }