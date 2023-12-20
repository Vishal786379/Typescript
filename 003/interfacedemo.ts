interface IEmployee{
    fname:string;
    lname:string;
    getEmployee():string;
}
interface IEmployee{
    email:string;
    getEmail():string;
}
const bhushan:IEmployee ={
    fname: "Yash",
    lname: "Kumar",
    email:'Y@k.com',
    getEmployee: function (): string {
        return `${this.fname}`
    },
    getEmail(){
        return `${this.email}`
    }
}
console.log(bhushan);
console.log(bhushan.fname)
console.log(bhushan.lname)
// class IEmployeeImpl implements IEmployee{
//     fname: string='Bhushan';
//     lname: string='';
//     getEmployee(): string {
//         return `Hello ${this.fname}`
//     }

// }
// var o = new IEmployeeImpl();
// console.log(o.getEmployee()) 