/**
 * 基础的类的定义
 */
class Greeter {
    greeting: string;
    public name: string; //可以在外部被访问到
    private salary: number; //在外部不能被访问到
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");

/**
 * 1.继承
 * 2.兼容性,即使Animal和Cat两个的定义名称是相同的，因为private不和外界共享变量，所以两者是不兼容的
 *   虽然Animal和其派生类兼容，但是派生类Dog无法访问private定义的 name ，只用主类的内部方法才可以
 */
class Animal {
    private name: string;
    protected lastname: string;
    move(distance: number = 0){
        console.log(`Animal move ${distance}m`);
        console.log(this.name + '  ' +this.lastname);
    }
    protected constructor(name: string, lastname: string){
        this.name = name;
        this.lastname = lastname;
    }
}
class Dog extends Animal{
    /**
     * readonly只读属性的设置，只读属性必须在声明时或构造函数里被初始化。
     */
    private readonly leg: number = 4;
    type: string;
    bark(){
        console.log('bark bark');
    }
    constructor(name: string, lastname: string, type: string){
        super(name, lastname);
        this.type = type;
    }
    move(distance = 45){
        console.log('Dog running...');
        super.move(distance);
        console.log(this.type + '  ' + this.leg);
    }
}

class Cat {
    private name: string;
}

let dog = new Dog('pape', 'yonge', 'taidi');
dog.move();

/**
 * 存取器
 * 通过设置get和set增加安全性
 */
let password: string = "123456";

class Employee{
    private name: string;
    
    get fullname(): string{
        return this.name;
    }

    set fullname(newname: string){
        if(password === '123456'){
            this.name = newname;
        }
        else{
            console.log('Error');
        }
    }
}
let employee = new Employee();
employee.fullname = 'Typescript';
if(employee.fullname){
    console.log(employee.fullname);
}

/**
 * 抽象类
 * 抽象类有自己的实现细节，这是与接口不同的方面
 */

 abstract class transport{
    public name: string;
    abstract maekSounde(): void;
    move(): void{
        console.log(`faster than animals + ${this.name}` );
    }
    constructor(name: string){
        this.name = name;
    }
 }
 class car extends transport{
     public sound: string;
     maekSounde(): void {
         console.log(`the sound of the car ${this.sound}`);
     }
     constructor(name: string, sound: string){
         super(name);
         this.sound = sound;
     }
     move(): void{
         console.log('ok, lets do it');
     }
 }

 let benchi = new car('benchi', '500hz');
 benchi.maekSounde();
 benchi.move();