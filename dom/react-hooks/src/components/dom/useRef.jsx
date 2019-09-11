import React, { useRef } from 'react';


export default function UseRef () {

const dv1 = useRef(null)

//  useRef 就像是可以在其 .current 属性中保存一个可变值的“盒子”。

    return(
        <>
            <div style={{fontSize: '20px'}} id="dv" className="dv1" ref={dv1}>div1</div>
            <div>div2</div>
            <div>div3</div>
            <button onClick={ () => {alert(dv1.current.innerText)} }>打印dom</button>
        </>
    )
} 