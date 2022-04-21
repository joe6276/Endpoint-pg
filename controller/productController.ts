 import pool from '../config/config'
// import {RequestHandler} from 'express'
import { Request,Response, NextFunction, RequestHandler } from 'express'
import { json } from 'stream/consumers'



 export const createProduct= async(req:Request,res: Response, _next:NextFunction)=>{
try {
     
 const { id,productName, productDescription}= req.body as { id:string, productName:string,productDescription:string }
 await pool.query(`INSERT INTO test(id, product,description)
 VALUES('${id}' , '${productName}' , '${productDescription}')`)

 res.json({message:'Product successfully Inserted'})

} catch (error:any) {
    
    console.log(error);
    
}
}


export const getProduct:RequestHandler=async(req,res)=>{

    try {
        const allproduct= await pool.query(
            ` SELECT * FROM test`
        )

        res.json(allproduct.rows)
    } catch (error:any) {
        console.log(error.message);
    }
}

export const getProductByid:RequestHandler<{id:string}>=async(req,res)=>{
    try {
        const id = req.params.id
        const allproduct= await pool.query(`SELECT * FROM test WHERE id = '${id}'`)
   
        res.json(allproduct.rows)
    } catch (error:any) {
        console.log(error.message);
        
    }
}


export const deleteProduct:RequestHandler<{id:string}>=async(req,res)=>{
    try {
        const id = req.params.id
        await  pool.query(` DELETE FROM test WHERE id = '${id}'`)

        res.status(201).json({message:'Product Deleted Successfully'})
    } catch (error:any) {
    console.log(error.message)    
    }
}


export const updateProduct:RequestHandler<{id:string}>=async (req,res)=>{

    try {
        
        const id = req.params.id;
        const { productName, productDescription}= req.body as { productName:string,productDescription:string }
        await pool.query(
            `UPDATE test SET product='${productName}' ,description='${productDescription}'  WHERE id='${id}' `
        )

        res.status(201).json({message:"Product Updated Successfully"})

    } catch (error:any) {
        console.log(error.message);
        
    }
}