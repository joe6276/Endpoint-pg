import pg from 'pg'
import dotenv from 'dotenv'
dotenv.config()

console.log("====================");
console.log( typeof +process.env.PORT_SQL);

console.log("====================");


const pool = new pg.Pool(
    {
        user: process.env.USER as string,
        password:process.env.PASSWORD as string,
        database:process.env.DATABASE as string,
        host:process.env.HOST as string,
        port:+process.env.PORT_SQL 
)





export default pool