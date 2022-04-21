import express from 'express'
import router from './routes/route'
import dotenv from 'dotenv'
dotenv.config()

const app= express()

app.use(express.json())

app.use('/product', router)
app.listen(process.env.PORT, ()=>{
    console.log(`Listening to Port : ${process.env.PORT} `);
    
})



// http.createServer((req,res)=>{
//     res.end('Hello from Server')
// }).listen(3000, ()=>{
//     console.log('Server Running...');
    
// })


