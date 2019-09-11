import React, { useState, useEffect, } from 'react';

export default function UseState () {
    
    const [count, addCount] = useState(0)

    const [obj, setObj] = useState([
        {
            name: '张三',
            sex: '0'
        }
    ])
    const addname = () => {
        setObj([
            ...obj,
            {
                name:'阿萨德',
                sex: 0
            }
        ])
    }

    useEffect(() => {
        document.title = count
    }, [count]);

    return (
        <>
        { count }

        <br /><button onClick={ () => {addCount(count + 1)} }>+ 1</button>

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