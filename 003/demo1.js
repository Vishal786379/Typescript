"use strict";
// Class 
class Employee {
    constructor(emp_id, emp_fname, emp_lname, emp_address, emp_email, emp_gender, emp_age) {
        this.emp_id = emp_id;
        this.emp_fname = emp_fname;
        this.emp_lname = emp_lname;
        this.emp_address = emp_address;
        this.emp_email = emp_email;
        this.emp_gender = emp_gender;
        this.emp_age = emp_age;
    }
    getEmployeeFullName(emp) {
        return `${emp.emp_fname} ${emp.emp_lname}`;
    }
    getEmployeeNameAndEmail(emp) {
        return `${emp.emp_fname} ${emp.emp_email}`;
    }
}
const emp1 = new Employee(1, 'John', 'Conor', 'Mumbai', 'a@b.com', 'male', 35);
console.log(emp1.getEmployeeFullName(emp1));
console.log(emp1.getEmployeeNameAndEmail(emp1));
class OperationsOnEmployee {
    getEmployeeFullName(emp, title) {
        return `${emp.emp_fname} ${emp.emp_lname}`;
    }
}
const emp2 = new Employee(2, 'James', 'Cameron', 'Mumbai', 'a@b.com', 'male', 35);
let obj = new OperationsOnEmployee();
console.log(obj.getEmployeeFullName(emp2));
