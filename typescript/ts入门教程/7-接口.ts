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