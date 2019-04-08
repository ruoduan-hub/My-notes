import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            ProductList: [
                {aid: '1', title: '商品1'},
                {aid: '2', title: '商品2'},
                {aid: '3', title: '商品3'},
                {aid: '4', title: '商品4'},
            ]
         };
    }
    render() {
        return (
            <div>
                <h4>商品组件</h4>
                {
                    this.state.ProductList.map(
                        (val, key) => <li key={key}>
                            <Link to={ `/productContent?aid=${val.aid}` } >{val.title}</Link>
                        </li>
                    )
                }
            </div>
        );
    }
}

export default Product;