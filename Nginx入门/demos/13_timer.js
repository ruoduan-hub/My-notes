setImmediate(()=>{
    console.log('setImmediate');
    
});


setTimeout(()=>{
console.log('setTimeout');

},0)

process.nextTick(()=>{
    console.log('tnextTick');
    
})

/*
tnextTick
setTimeout
setImmediate

tnextTick 是最快的  setImmediate 要等 其他的先执行
*/