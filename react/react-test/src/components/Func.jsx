import React from 'react'


export default class Func extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            name: '张三'
        }
    }


    render () {

        let changeText = (data) => {
            this.setState({
                name: data
            })
            
        }

        return (
            <div>
                <hr />
                <h1>事件绑定</h1>
                <h3>{this.state.name}</h3>

                <button onClick={changeText.bind(this, '穿穿穿')} >传值</button>
            </div>
        )
    }
}