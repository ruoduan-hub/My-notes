import React from 'react'
import PropTypes from 'prop-types';

class DefaultFooter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 

         };
    }
    render() {
        return (
            <div>
                <h2>---{ this.props.title }------{ this.props.num }---</h2>
            </div>
        );
    }
}

// 给组件绑定默认值
DefaultFooter.defaultProps = {
    title: '标题'
}

//通过 PropTypes 定义父组件给子组件传值的类型
DefaultFooter.propTypes = {
    num: PropTypes.number
};


export default DefaultFooter;