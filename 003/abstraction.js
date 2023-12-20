"use strict";
class MyAbstractClass {
}
class MyAbstractClassImpl extends MyAbstractClass {
    getData() {
        return 'Its Implemented';
    }
}
class Test {
    constructor() {
        this.myabsimpl = new MyAbstractClassImpl();
        this.myabs = new MyAbstractClass();
    }
}
