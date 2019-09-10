import React, { useState, useEffect, } from 'react';

export default function UseState () {
    
    let [obj, setObj] = useState([
        {
            name: '张三',
            sex: '0'
        }
    ]);
    const addname = () => {
        setObj(obj.push({
            name: '李四',
            sex: '1'
        }))
        console.log(obj)
    }

    useEffect(() => {
        
    })

    return (
        <>
        {
            obj.map(item => 
                <div key = {item}>{ item.name } { item.sex ==='0'? '男' : '女' }</div>
                )
        }
        <br/>
        <button onClick={addname}>增加人员</button>
        </>
    )
}