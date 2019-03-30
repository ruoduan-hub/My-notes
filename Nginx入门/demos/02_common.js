console.log('this is a module ')

function test () {
    console.log(testVar)
}
const testVar = 100;
module.exports.testVar = testVar;

//对外暴露的名字 随意
module.exports.testfn = test;
