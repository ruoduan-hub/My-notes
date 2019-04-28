import React from 'react';
import { connect } from 'react-redux'
import Counter from './Counter '

class Home extends React.Component {
    constructor (props, context){
        super() 
        this.state = {
            
        }
    }
    

    mycl = () => {
        alert(this.props.tiger)
    } 

    render() {
    
        return (
            <div>
                <hr /> <br />
                <h1>home 组件</h1>
                <button onClick= {this.mycl}>打印目前工资</button>
                <hr /> <br />
                <Counter />
                
            </div>
        );
    }

    componentDidMount () {
        console.log(this.props)
    }

}


//需要渲染什么数据
function mapStateToProps(state) {
    return {
        tiger: state
    }
  }
  //需要触发什么行为
  function mapDispatchToProps(dispatch) {
    return {
        PayIncrease: () => dispatch({ type: '涨工资' }),
        PayDecrease: () => dispatch({ type: '扣工资' })
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Home)