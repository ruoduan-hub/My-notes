import React from 'react';

var Myname = 111

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            myid: 123
         };
    }
    handlerName = () => {
        Myname = this.refs.Myname.value
        alert(Myname)
    }

    inputChange = () =>{
        let val = this.refs.username.value
        this.setState({ username: val })
    }

    keyUp = (event) =>{
        
        if (event.keyCode === 13) {
            alert(event.target.value)
        }
    }

    valueChange = ()=>{

    }

    render() {
        return (
            <div>
                <br /><hr />
                
                <input ref='username' type="text" name="test" id=""  onChange={this.inputChange} />
                <h1>{ this.state.username }</h1>
                <br /> <hr />
                按下键盘回车获取input的值
                <input onKeyUp={this.keyUp} type="text" name="code" id=""/>
                <br /> <hr />
                {/* 约束性组件，是通过onChange 来管理值的  */}
                <input value={this.state.myid} onChange={this.valueChange} type="text" name="" id=""/>
                
                {/* 非约束性组件，不绑定react 直接获取dom 需要用defaultValue */}
                <input defaultValue={this.state.myid} type="text" name="" id=""/>

                <input ref="Myname" type="text" onChange={this.handlerName} />
                <div>{Myname}</div>
            </div>
        );
    }
}

export default List;