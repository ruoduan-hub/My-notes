import React from 'react'

class LifrCycle extends React.Component {
    //首先执行构造函数
    constructor(props) {
        console.log('01构造函数')
        super(props);
        this.state = { 
            msg: 'LifeCycle'
         };
    }
    //组件将要挂载，异步操作
    componentWillMount () {
        console.log('02组件将要挂载')
    }

    //数据渲染好了，组件将要挂载。（能保证数据）
    componentDidMount () {
        console.log('04组件将要挂载')
    }

    // 数据更新 返回一个布尔类型，是否要更新数据
    shouldComponentUpdate (nextProps, nextState) {
        //表示更新后的数据
        console.log(nextProps)
        console.log(nextState)
        return true
    }
    //数据将要更新的时候触发
    componentWillUpdate() {
        console.log('01组件将要更新')
    }

    //数据更新时
    componentDidUpdate () {
        console.log('04数据更新完成')
    }
    
    componentWillReceiveProps () {
        console.log('父组件传值，父组件里面改变了props的值触发的方法')
    }

    //组件销毁的时候触发的声明周期函数
    componentWillUnmount () {
        console.log('组件销毁')
    }
    


    msgChange = () => {
        this.setState({
            msg: 'change LifeCycle'
        })  
    }

    render() {
        
        //数据渲染
        console.log('03数据渲染')
        return (
            <div>
                <h3>react生命周期函数</h3>
                <h4>{ this.state.msg }</h4>
                <button onClick={this.msgChange}>change</button>
            </div>
        );
    }
}

export default LifrCycle;

/*
https://reactjs.org/docs/react-component.html


React生命周期函数：

    组件加载之前，组件加载完成，以及组件更新数据，组件销毁。

    触发的一系列的方法 ，这就是组件的生命周期函数


组件加载的时候触发的函数： 

    constructor 、componentWillMount、 render 、componentDidMount

组件数据更新的时候触发的生命周期函数：

    shouldComponentUpdate、componentWillUpdate、render、componentDidUpdate


你在父组件里面改变props传值的时候触发的：

    componentWillReceiveProps


组件销毁的时候触发的：

    componentWillUnmount


必须记住的生命周期函数：


    *加载的时候：componentWillMount、 render 、componentDidMount（dom操作）

    更新的时候：componentWillUpdate、render、componentDidUpdate

    *销毁的时候： componentWillUnmount




*/