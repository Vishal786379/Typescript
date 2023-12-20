class Parent{
    printName(){
        return `Welcome To Citiustech`
    }

}
class Child extends Parent{
    printName(){
        super.printName();
        console.log('Welcome from Parent')
        return `Welcome To Bld 14`
    }

}
var obj1 = new Child();
console.log(obj1.printName());

