import React from 'react'
import url from 'url'

class ProductInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            aid: ''
         };
    }

    componentDidMount () {
        //获取get传值
        console.log(this.props.location.search);
        
        console.log(url.parse(this.props.location.search, true));

        let aid = url.parse(this.props.location.search, true).query.aid
        this.setState({
            aid: aid
        })
        
        
    }

    render() {
        return (
            <div>
                商品详情----------------{this.state.aid}
            </div>
        );
    }
}

export default ProductInfo;