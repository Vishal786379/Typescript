"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTwoNumber = exports.CtEmployee = exports.employeeId = exports.employeeName = void 0;
exports.employeeName = 'Bhushan';
exports.employeeId = 'CT101';
class CtEmployee {
    constructor(ctId, ctEmail) {
        this.ctId = ctId;
        this.ctEmail = ctEmail;
    }
}
exports.CtEmployee = CtEmployee;
function addTwoNumber(num1, num2) {
    return num1 + num2;
}
exports.addTwoNumber = addTwoNumber;
