class Person {
    constructor (public name: string) { //加上public，相当于在内部赋了个name 属性的值
        console.log(`哈哈${name}`)
    }
    eat () {
        console.log(this.age)
    }
    private age=18// 私有的，在外部实例化没法访问

}

class American extends Person {//子类可以继承父类所有的属性和方法
    constructor () {
        super ('jude')//调父类的构造函数
    }

    code: number = 888;
    work () {
        console.log(this.code)
    }
}

//在调用的时候回首先执行父类的 constructor 构造函数
var a1 = new American()
//哈哈 jude
console.log(a1.name)//jude
a1.eat()//18
a1.work()//888

//泛型

var workres: Array<Person> = [];
workres[0] = new Person('zs');
workres[1] = new American();
workres[2] = new Person('xm', 'f');//err
workres[3] = 3//err 声明了 泛型 只能放  Person 类的数据

