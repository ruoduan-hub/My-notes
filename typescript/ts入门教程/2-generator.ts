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