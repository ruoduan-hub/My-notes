## 基础类型

> TypeScript是一种由微软开发的自由和开源的编程语言。它是JavaScript的一个超集，而且本质上向这个语言添加了可选的静态类型和基于类的面向对象编程。安德斯·海尔斯伯格，C#的首席架构师，已工作于TypeScript的开发。

**本篇是一个入门教程，包含一些 es6为基础，重点篇幅是《面向对特征这一篇幅》** ——作者 Ruodaun 转载请注明出处

配合 github实例：[github.com/Chad97/My-n…](https://link.juejin.im?target=https%3A%2F%2Fgithub.com%2FChad97%2FMy-notes%2Ftree%2Fmaster%2Ftypescript)



### 1.布尔值

- 最基本的数据类型就是简单的true/false值

`let isDone: boolean = false;`

### 2. 数字

- 和JavaScript一样，TypeScript里的所有数字都是浮点数。 这些浮点数的类型是number。 除了支持十进制和十六进制字面量，TypeScript还支持ECMAScript 2015中引入的二进制和八进制字面量

  ```js
  let decLiteral: number = 6;
  let hexLiteral: number = 0xf00d;
  let binaryLiteral: number = 0b1010;
  let octalLiteral: number = 0o744;
  ```

### 3.字符串

```js
let Name: string = 'joud'

Name = 'bob'
let name: string = `Gene`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ name }.

I'll be ${ age + 1 } years old next month.`;

//等同于
let sentence: string = "Hello, my name is " + name + ".\n\n" +
    "I'll be " + (age + 1) + " years old next month.";

```

### 4.数组

```js
let list: number[] = [1, 2, 3]
let list2: Array<Number> = [3, 2, 1]//数组泛型
```

#### 元组 Tuple

```js
let x: [string, number];

x = ['hello', 10] //ok

x = [10, 'hello'] //error
// 当访问一个已知索引的元素，会得到正确的类型：

console.log(x[0].substr(1)); // OK

console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'

//当访问一个越界的元素，会使用联合类型替代：

x[3] = 'world'; // OK, 字符串可以赋值给(string | number)类型

console.log(x[5].toString()); // OK, 'string' 和 'number' 都有 toString

x[6] = true; // Error, 布尔不是(string | number)类型
```

### 5.枚举 enum

```js
//enum类型是对JavaScript标准数据类型的一个补充。 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。
enum Color {read, green, blue}
let c: Color = Color.read;
//默认情况下，从0开始为元素编号。 你也可以手动的指定成员的数值。 例如，我们将上面的例子改成从1开始编号：
enum Color {red = 1, green, blue}
//或者，全部都采用手动赋值：
enum Color {Red = 1, Green = 2, Blue = 4}
let c: Color = Color.Green;

//枚举类型提供的一个便利是你可以由枚举的值得到它的名字。 例如，我们知道数值为2，但是不确定它映射到Color里的哪个名字，我们可以查找相应的名字：
enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];
console.log(colorName);  // 显示'Green'因为上面代码里它的值是2
```

### 6. 任意值 any

```js
//有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 那么我们可以使用any类型来标记这些变量：
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
notSure = true;

//在对现有代码进行改写的时候，any类型是十分有用的，它允许你在编译时可选择地包含或移除类型检查。 你可能认为Object有相似的作用，就像它在其它语言中那样。 但是Object类型的变量只是允许你给它赋任意值 - 但是却不能够在它上面调用任意的方法，即便它真的有这些方法：
let notSure: any = 4;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

let prettySure: Object = 4;
prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.

//当你只知道一部分数据的类型时，any类型也是有用的。 比如，你有一个数组，它包含了不同的类型的数据：
let list: any[] = [1, true, "free"];

list[1] = 100;
```

### 7.空值 void

```js
// 某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是void：
function warnUser(): void {
    console.log("This is my warning message");
}
```



### 8.Null 和 Undefined

```js
// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;
```

### 9.Never

```js
//Never
//never类型表示的是那些永不存在的值的类型。 例如，never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是never类型，当它们被永不为真的类型保护所约束时。
//never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使any也不可以赋值给never。
//返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}
```

### 10.Object

```js
// object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
// 使用object类型，就可以更好的表示像Object.create这样的API。例如：
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

create(42); // Error
create("string"); // Error
create(false); // Error
create(undefined); // Error

```



##  变量

### 1.var

```js
for (var i = 0; i < 10; i++) {
    setTimeout(function() { console.log(i); }, 100 * i);
}
```

### 2.let

- 跨几作用域具体看这2段代码的区别，一个i被覆盖，一个没有被覆盖

```js
for (let i = 0; i < 10; i++) {
    setTimeout(function() { console.log(i); }, 100 * i);
}
```



### 3.const

它们与`let`声明相似，但是就像它的名字所表达的，它们被赋值后不能再改变。 换句话说，它们拥有与`let`相同的作用域规则，但是不能对它们重新赋值。

这很好理解，它们引用的值是*不可变的*。

```ts
const numLivesForCat = 9;
const kitty = {
    name: "Aurora",
    numLives: numLivesForCat,
}

// Error
kitty = {
    name: "Danielle",
    numLives: numLivesForCat
};

// all "okay"
kitty.name = "Rory";
kitty.name = "Kitty";
kitty.name = "Cat";
kitty.numLives--;
```

### 解构 And 展开 

```js
let [, second, , fourth] = [1, 2, 3, 4];
//展开
let first = [1, 2];
let second = [3, 4];
let bothPlus = [0, ...first, ...second, 5]
```

# generator

```js
function * dosomething () {
    console.log("start")

    yield;

    console.log("finish")

    yield;

    console.log("end")
}

let fn1 = dosomething();

fn1.next()
fn1.next()
fn1.next()
```

- 进阶用法

```js
function* generatorGet(stock: any) {
    while (true) {
        yield Math.random()*100 //这里相当是一个断点
    }
}

var res = generatorGet('alibaba')
var myStock = 35;
var price = 100;

while (price > myStock) { //一直循环，
    price = res.next().value;
    console.log(`价格小于35returnreturn ${price}`);
}

console.log(`whole -- ${price}`)
```

# 箭头表达式

```js
var sum = (a1: number, a2: number, a3: number = 0) => a1 + a2 +a3;

console.log(sum(1,1))//2
console.log(sum(1,1,1))//3

var gg  = (res: number) => res+1;

const myarr = [1,2,3,4]
console.log(myarr.filter(val => val%2 == 0))//2,4

// function aa (name: string) {
//     this.name = name
//     setInterval(function(){
//         console.log(this.name)
//     },1000)
// }
// var a1 =new aa('a')//undefind 因为这里this指向 windo


function aaa (name: string) {
    this.name = name
    setInterval( () =>{
        console.log(name)
    },1000)
}
var a2 =new aaa('a')//正常 因为这里的this指向 父级

```

## 表达式for of 循环

```js
var arr1 = [1, 2, 3, 4]
arr1.le = 'num'

arr1.forEach(val => console.log(val)) //1 2 3 5 会忽略属性值，而且不可控制中断

for (let i in arr1) {
    console.log(i) //0,1,2,3,le 打印的是下标
}

for (let i in arr1) {
    console.log(arr1[i]) //1 2 3 4 num, for in 属性也会被循环出来
}

//for of 循环，可以循环任何
for (let i of arr1) {
    console.log(i) //1 2
    if (i === 2) {
        break
    }
}//可以被break 终止

var str = 'aabbcc'

for (const item of str) {
    console.log(item)//aabbcc
}

```

# 面向对象特征

### 1.类的定义

在TypeScript里，我们可以使用常用的面向对象模式。 基于类的程序设计中一种最基本的模式是允许使用继承来扩展现有的类。

```js
class Person {
    constructor (public name: string) { //加上public，相当于在内部赋了个name 属性的值
        console.log(`哈哈${name}`)
    }
    eat () {
        console.log(this.age)
    }
    private age=18// 私有的，在外部实例化没法访问

}
```

- ### 一些总结

  - #### 默认为public

  - #### private 私有的

  - #### protected

    - `protected`修饰符与`private`修饰符的行为很相似，但有一点不同，`protected`成员在派生类中仍然可以访问。例如

    ```js
    class Person {
        protected name: string;
        constructor(name: string) { this.name = name; }
    }
    
    class Employee extends Person {
        private department: string;
    
        constructor(name: string, department: string) {
            super(name)
            this.department = department;
        }
    
        public getElevatorPitch() {
            return `Hello, my name is ${this.name} and I work in ${this.department}.`;
        }
    }
    
    let howard = new Employee("Howard", "Sales");
    console.log(howard.getElevatorPitch());
    console.log(howard.name); // 错误
    ```

  - #### readonly修饰符 使用`readonly`关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化

  - #### 存取器

    - ypeScript支持通过getters/setters来截取对对象成员的访问。 它能帮助你有效的控制对对象成员的访问。

    下面来看如何把一个简单的类改写成使用`get`和`set`。 首先，我们从一个没有使用存取器的例子开始。

    ```ts
    class Employee {
        fullName: string;
    }
    
    let employee = new Employee();
    employee.fullName = "Bob Smith";
    if (employee.fullName) {
        console.log(employee.fullName);
    }
    ```

    我们可以随意的设置`fullName`，这是非常方便的，但是这也可能会带来麻烦。

    下面这个版本里，我们先检查用户密码是否正确，然后再允许其修改员工信息。 我们把对`fullName`的直接访问改成了可以检查密码的`set`方法。 我们也加了一个`get`方法，让上面的例子仍然可以工作。

    ```ts
    let passcode = "secret passcode";
    
    class Employee {
        private _fullName: string;
    
        get fullName(): string {
            return this._fullName;
        }
    
        set fullName(newName: string) {
            if (passcode && passcode == "secret passcode") {
                this._fullName = newName;
            }
            else {
                console.log("Error: Unauthorized update of employee!");
            }
        }
    }
    
    let employee = new Employee();
    employee.fullName = "Bob Smith";
    if (employee.fullName) {
        alert(employee.fullName);
    }
    ```

    我们可以修改一下密码，来验证一下存取器是否是工作的。当密码不对时，会提示我们没有权限去修改员工。

    对于存取器有下面几点需要注意的：

    首先，存取器要求你将编译器设置为输出ECMAScript 5或更高。 不支持降级到ECMAScript 3。 其次，只带有`get`不带有`set`的存取器自动被推断为`readonly`。 这在从代码生成`.d.ts`文件时是有帮助的，因为利用这个属性的用户会看到不允许够改变它的值。

### 2.继承

```js
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
```

### 2.泛型

```js
var workres: Array<Person> = [];
workres[0] = new Person('zs');
workres[1] = new American();
workres[2] = new Person('xm', 'f');//err
workres[3] = 3//err 声明了 泛型 只能放  Person 类的数据
```



### 3.接口

TypeScript的核心原则之一是对值所具有的*结构*进行类型检查。 它有时被称做“鸭式辨型法”或“结构性子类型化”。 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约

#### interface

```js
interface iperson {
    name: string,
    age: number
}

class Animal {//用接口声明属性
    constructor (public belong: iperson ) {

    }
}

var aa1 = new Animal({
    name: '二哈',
    age: 3
})
```



#### implements

```js
interface dog {
    call () 
}

class Sheep implements dog {
    call () {
        console.log('咩咩咩') //被 implements 指定接口，需要实现指定接口的方法
    }
}

class Tiger implements dog {
    call () {
        console.log('吼吼吼') //实现被指定的接口 dog 的方法 call
    }
}
```



### 4.模块 Module

<http://es6.ruanyifeng.com/?search=%E6%A8%A1%E5%9D%97&x=0&y=0#docs/module>

和es6 差不多 文件作用域，自行体会

- export
- import 



### 5.注解(annotation)

为程序的元素、类、方法、变量，加上更直观的说明，这些说明信息与程序的业务逻辑无关，而是供指定框架或工具使用

- 以Angular 2 为例

![typescript注解](/Users/apple/Desktop/typescript注解.png)



> 这是一个由Angular2写的项目,我们看到AppComponent上面有个@Compoent注解
> 这个@Compoent注解本身是由Angular2框架提供的
> 在这个注解里面有一些属性
> 这些属性告诉Angular2怎么处理AppComponent这样一个TypeScript类

> 这个意思就是说在Angular2框架里面我们实例话应该AppComponent类，
> Angular框架应该去加载app.component.html页面和app.component.css，然后展示在页面上



### 6.类型定义文件 (*.d.ts)

**.d.ts** 其实就是在typescript里面使用，js的库，而作为js的超集ts自然是支持的，只是需要类型定义文件而已，就是`.d.ts`，例如想在 ts项目中使用jQuery，下面提供了几个库，供参考

- 常用的 typescript 使用js的库https://github.com/DefinitelyTyped/DefinitelyTyped.git

- 使用typings 工具 https://github.com/typings/typings.git







