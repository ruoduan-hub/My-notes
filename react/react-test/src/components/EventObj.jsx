import React from 'react'


export default class EventObj extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            msg: "哈哈哈",
            username: '1'
        }
    }

    run = (event) =>{
        // console.log(event.target);
        event.target.style.background = 'red'

        //获取dom 属性
        console.log(event.target.getAttribute('myid'))
    }

    testChange = (e) => {
        const newval = e.target.value
        this.setState({username: newval})
    }

    getInput = () => {
        alert(this.state.username)
    }
    

    render () {
        return (
            <div>
                <br />
                <button myid='123' onClick={ this.run }>react事件</button>
                <hr /><br />

                <input onChange= { this.testChange }  type="text" name="" id=""/>
                <br />
                <button onClick={this.getInput} >获取表单</button> 
            </div>
        )
    }
}