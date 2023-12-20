"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import employeeName,{} from './mydata.js'
const mydata_js_1 = require("./mydata.js");
console.log(mydata_js_1.employeeName);
console.log(mydata_js_1.employeeId);
let emp = new mydata_js_1.CtEmployee(101, 'Bhushan');
console.log(emp.ctId, emp.ctEmail);
console.log((0, mydata_js_1.addTwoNumber)(23, 23));
