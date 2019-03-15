function getStock() {
    return {
        code: 'alibaba',
        // price: 100
        price: {
            price1: 100,
            price2: 200
        },
        a: 'aaa',
        b: 'bbb'
    }
}

//注意使用——析构表达式，要注意上下文的变量名要一致
var { code, price } = getStock();
console.log(code)
console.log(price)
//如果要改变变量名可以: 通过一个： 来指定
var {code: codex, price } = getStock();

//拿到指定属性
var {code: codex, price: {price2} } = getStock();


//数组的
var arr1 = [1, 2, 3, 4];

var [number1, number2] = arr1;
console.log(number1, number2) //1 2

var [, ,number3, number4] = arr1;
console.log(number1, number2) // 3 4

var [number3, number4, ...oten] = arr1;
console.log(number3, number4,oten) // 1 , 2 , [3,4]

function dosomething ([number3, number4, ...oten]) {
    console.log(number3, number4,oten)
}
dosomething ([1,2,3,4,5]) //1,2,[3,4,5]
