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
