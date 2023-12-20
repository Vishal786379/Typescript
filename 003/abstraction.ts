abstract class MyAbstractClass{
    abstract getData():string;
}
class MyAbstractClassImpl extends MyAbstractClass{
    getData(): string {
        return 'Its Implemented'
    }
    
}
class Test{
    myabsimpl = new MyAbstractClassImpl();
    myabs=new MyAbstractClass();
}