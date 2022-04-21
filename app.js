"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route_1 = __importDefault(require("./routes/route"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/product', route_1.default);
app.listen(process.env.PORT, () => {
    console.log(`Listening to Port : ${process.env.PORT} `);
});
// http.createServer((req,res)=>{
//     res.end('Hello from Server')
// }).listen(3000, ()=>{
//     console.log('Server Running...');
// })
