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
