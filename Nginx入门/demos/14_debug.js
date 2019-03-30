function test1 () {
    const a = parseInt(Math.random() * 10)
    const b = parseInt(Math.random() * 10)

    const c = test2(a, b)
}


function test2 (a, b) {
    if (a > b) {
        console.log('大');
        
    } else {
        console.log('小');
        
    }
    return a + b
}

test1()