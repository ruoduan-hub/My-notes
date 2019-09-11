import React, { useState, useEffect } from 'react';
import { message } from 'antd';

function Child({ visible }) {
  useEffect(() => {
    alert('我只在页面挂载时打印');

    return () => {
      alert('我只在页面卸载时打印');
    };
  }, []);

  return visible ? 'true' : 'false';
}

export default function HookDemo() {
  const [visible, changeVisible] = useState(true);
  const [number, changeNumber] = useState(0);


  //  number 改变后的回调函数
  useEffect(() => {
    message.info(`当前的数字是： ${number}`)
  }, [number])

  return (
    <div>
      {
        visible && <Child visible={visible} />
      }
      <button onClick={() => { changeVisible(!visible); }}>
        改变visible
      </button>
      <br />
      { number }
      <br />
      <button onClick={ () => {changeNumber(Math.ceil(Math.random() * 100))} }>change</button>
    </div>
  );
}
