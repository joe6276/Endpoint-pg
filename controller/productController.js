"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProduct = exports.deleteProduct = exports.getProductByid = exports.getProduct = exports.createProduct = void 0;
const config_1 = __importDefault(require("../config/config"));
const createProduct = async (req, res, _next) => {
    try {
        const { id, productName, productDescription } = req.body;
        await config_1.default.query(`INSERT INTO test(id, product,description)
 VALUES('${id}' , '${productName}' , '${productDescription}')`);
        res.json({ message: 'Product successfully Inserted' });
    }
    catch (error) {
        console.log(error);
    }
};
exports.createProduct = createProduct;
const getProduct = async (req, res) => {
    try {
        const allproduct = await config_1.default.query(` SELECT * FROM test`);
        res.json(allproduct.rows);
    }
    catch (error) {
        console.log(error.message);
    }
};
exports.getProduct = getProduct;
const getProductByid = async (req, res) => {
    try {
        const id = req.params.id;
        const allproduct = await config_1.default.query(`SELECT * FROM test WHERE id = '${id}'`);
        res.json(allproduct.rows);
    }
    catch (error) {
        console.log(error.message);
    }
};
exports.getProductByid = getProductByid;
const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        await config_1.default.query(` DELETE FROM test WHERE id = '${id}'`);
        res.status(201).json({ message: 'Product Deleted Successfully' });
    }
    catch (error) {
        console.log(error.message);
    }
};
exports.deleteProduct = deleteProduct;
const updateProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const { productName, productDescription } = req.body;
        await config_1.default.query(`UPDATE test SET product='${productName}' ,description='${productDescription}'  WHERE id='${id}' `);
        res.status(201).json({ message: "Product Updated Successfully" });
    }
    catch (error) {
        console.log(error.message);
    }
};
exports.updateProduct = updateProduct;
