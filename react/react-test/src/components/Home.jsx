import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import DefaultFooter from './DefaultFooter.jsx'
import { isNumber } from 'util';
import AxiosList from './AxiosList'
import LifrCycle from './LifrCycle'

export default class Home extends Component {


    constructor () {
        super()
        this.state = {
            name : 'react',
            msg: '我是首页的msg',
            age: 30,
            style:{
                color: 'red',
                fontSize: '26px'
            },
            flag: true,
        }

    }

    run = () =>{
        alert('i is father of func')
    }

    //获取子组件传过来的数据
    getChildData = (result) =>{
        alert(result)
        this.setState({
            msg: result
        })
    }

    //父组件主动调用子组件的数据和方法
    getFooter = () => {
        let data = this.refs.fooder.state.msg;
        alert(data)
    }

    setFlag = () =>{
        this.setState({
            flag: !this.state.flag
        })
    }

  render() {
    return (
        <div>
        {/* <h1>hello {this.state.name}</h1>
        <p title={this.state.age}>my is age {this.state.age} </p>
        <label className='name' htmlFor='name'>姓名：</label>
        <input id='name' type='name'  />
        <div style={{ margin: '30px',color: 'red' }} >行内样式</div>
        <div style={ this.state.style } >行内样式2</div>

        <br/> <hr />

        <Header myThis={this} run={this.run} msg={this.state.msg} />

        <button onClick={this.getFooter}>父组件主动调用子组件的数据和方法</button>
        <Footer ref="fooder" />
        <hr /><br /> */}

        {/* <DefaultFooter title={this.state.msg} /> */}

        {/* <DefaultFooter title={this.state.msg} num= { parseInt(123) } /> */}

        {/* <AxiosList /> */}
        

        {
            this.state.flag?<LifrCycle />:""
        }
        <br />
        <button onClick={this.setFlag}>Ifshow</button>
        
    </div>
    )
  }
}


/*

React中的组件: 解决html 标签构建应用的不足。         

使用组件的好处：把公共的功能单独抽离成一个文件作为一个组件，哪里里使用哪里引入。

父子组件：组件的相互调用中，我们把调用者称为父组件，被调用者称为子组件

父子组件传值（react 父子组件通信）：

    父组件给子组件传值 

		    1.在调用子组件的时候定义一个属性  <Header msg='首页'></Header>

			  2.子组件里面 this.props.msg          


        说明：父组件不仅可以给子组件传值，还可以给子组件传方法,以及把整个父组件传给子组件,可以让子组件给父组件传值。


    父组件主动获取子组件的数据

        1、父组件调用子组件的时候指定ref的值 <Header ref='header'></Header>      
        
        2、父组件通过this.refs.header  获取整个子组件实例  (dom（组件）加载完成以后获取 )



*/

