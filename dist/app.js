"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const greeting: string = 'Hello';
// const numbers: number[] = [1,2,3];
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const add = (a, b) => a + b;
app.get('/', (req, res, next) => {
    console.log(add(5, 5));
    res.send("sds");
});
app.listen(5000, () => {
    console.log('server running');
});
