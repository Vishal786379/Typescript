export const employeeName:string ='Bhushan'
export const employeeId:string ='CT101'
export class CtEmployee{
    ctId:number;
    ctEmail:string;
    constructor(ctId:number, ctEmail:string){
        this.ctId=ctId;
        this.ctEmail=ctEmail
    }
}
export function addTwoNumber(num1:number,num2:number){
    return num1+num2
}