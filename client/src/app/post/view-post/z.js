class Human {

    constructor(name) {
    this.name = name;
    }
    getHi() {
    console.log("hi from Human -" + this.name + "-")
    }
    }
    class Person extends Human {
    constructor(name, age) {
    super(name);
    this.age = age;
    console.log("parreg")
    }
    
    getHi() {
    console.log("hi from Person -" + this.name + "- And my Age: " + this.age+ "And i have study= "+this.hStudy);
    }
    
    }
    
    class Child extends Person {
    constructor(name , age ,hStudy) { 
    super(name,age);
    console.log("child")
    //this.hStudy=hStudy;
    }
    // getHi() {
    // console.log("hi from child -" + this.name + "- And my Age: " + this.age+ "And i have study= "+this.hStudy);
    // }
    
    }
    
    class Child2 extends Person {
    constructor(name , age , haveStudy) { 
    super(name,age,haveStudy);
    this.haveStudy=haveStudy;
    
    }
    getHi() {
    console.log("hi from Child -" + this.name + "- And my Age: " + this.age + "And i have study= " + this.haveStudy)
    }
    
    }
    var c = new Child('jamal', 21, true)
    c.getHi()