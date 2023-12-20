"use strict";
const bhushan = {
    fname: "Yash",
    lname: "Kumar",
    email: 'Y@k.com',
    getEmployee: function () {
        return `${this.fname}`;
    },
    getEmail() {
        return `${this.email}`;
    }
};
console.log(bhushan);
console.log(bhushan.fname);
console.log(bhushan.lname);
// class IEmployeeImpl implements IEmployee{
//     fname: string='Bhushan';
//     lname: string='';
//     getEmployee(): string {
//         return `Hello ${this.fname}`
//     }
// }
// var o = new IEmployeeImpl();
// console.log(o.getEmployee()) 
