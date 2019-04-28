import React from 'react';
import { connect } from 'react-redux';

class Counter  extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 

         };
    }
    render() {
        const { Paytaxes } = this.props
        return (
            <div>
                <h2>税后计算</h2>
                <button onClick={ Paytaxes } >缴税</button>
                <p>{this.props.tiger}</p>
            </div>
        );
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
        PayDecrease: () => dispatch({ type: '扣工资' }),
        Paytaxes: () => dispatch({ type: '缴税' }),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Counter)