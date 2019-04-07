import React from 'react'



class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg: '头部组件'
         };
    }

    getData = () => {
        const data = this.props.myThis.msg
        console.log(data)
    }

    render() {
        return (
            <div>
                { this.state.msg }
                <h3>{ this.props.msg }</h3>
                <button onClick={this.props.run} >调用父组件的方法</button>
                <br />
                <button onClick={this.getData}>打印整个父组件</button>
                <br />
                <button onClick={this.props.myThis.getChildData.bind(this, '我是子组件的数据')}>子组件给父组件传值</button>
            </div>
        );
    }
}

export default Header;