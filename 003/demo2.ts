class MyClass{
    public public_variable:string;
    private private_variable:string;
    readonly readonly_variable:string;
    protected protected_variable:string
    constructor( public_variable:string, private_variable:string, readonly_variable:string, protected_variable:string){
        this.public_variable=public_variable;
        this.private_variable=private_variable;
        this.readonly_variable=readonly_variable;
        this.protected_variable=protected_variable
    }
    print():string{
        return `${this.public_variable} ${this.private_variable} ${this.readonly_variable} ${this.protected_variable}`
    }
}
const var1=new MyClass('public','private','readOnly','protected');
var1.readonly_variable='newValue'
console.log(var1.public_variable,var1.private_variable,var1.readonly_variable,var1.protected_variable);

// For protected
class ChildClass extends MyClass{
    getValueOfProtectedVariable(){
        console.log(this.protected_variable);
        console.log(this.private_variable);
    }
}
