"use strict";
class MyClass {
    constructor(public_variable, private_variable, readonly_variable, protected_variable) {
        this.public_variable = public_variable;
        this.private_variable = private_variable;
        this.readonly_variable = readonly_variable;
        this.protected_variable = protected_variable;
    }
    print() {
        return `${this.public_variable} ${this.private_variable} ${this.readonly_variable} ${this.protected_variable}`;
    }
}
const var1 = new MyClass('public', 'private', 'readOnly', 'protected');
var1.readonly_variable = 'newValue';
console.log(var1.public_variable, var1.private_variable, var1.readonly_variable, var1.protected_variable);
// For protected
class ChildClass extends MyClass {
    getValueOfProtectedVariable() {
        console.log(this.protected_variable);
        console.log(this.private_variable);
    }
}
