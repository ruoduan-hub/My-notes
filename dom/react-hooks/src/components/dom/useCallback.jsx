
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { message } from 'antd';

export default function UseCallback (props) {
    const [count1, changeCount1] = useState(0);
    const [count2, changeCount2] = useState(10);

    const calculateCount = useCallback(() => {
        if (count1 && count2) {
            return count1 * count2
        }

        return count1 + count2
    },[count1, count2])


    useEffect(() => {
        const result = calculateCount(count1, count2);
        message.info(`执行副作用，最新值为${result}`)
    }, [calculateCount])



    return (
        <>
        {
            props.test
        }
        <div>{ count1 }</div>
        <div>{ count2 }</div>
        <button onClick={ () => {changeCount1(count1 + 1)} }>改变 count1</button>
        <button onClick={ () => {changeCount2(count2 + 1)} }>改变 count2</button>
        </>
    )
}