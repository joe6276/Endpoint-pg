import pg from 'pg'
import dotenv from 'dotenv'
dotenv.config()
const pool = new pg.Pool(
    {
        user:'postgres' as string,
        password:'1234' as string,
        database:'testing2' as string,
        host:'localhost' as string,
        port:5432
    }
)

console.log('Here');



export default pool