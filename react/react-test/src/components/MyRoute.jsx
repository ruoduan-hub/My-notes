import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import News from './routes/News'
import Info from './routes/Info'
import Product from './routes/Product'
import NewsInfo from './routes/NewsInfo'
import ProductInfo from './routes/ProductInfo'




class MyRoute extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 

         };
    }
    render() {
        return (
                <Router>
                    <Link to='/'>新闻</Link>
                    <Link to='/info'>详情</Link>
                    <Link to='/product'>商品</Link>

                    <hr /> <br />
                    <Route exact path='/' component={ News } />
                    <Route path='/info' component={ Info } />
                    <Route path='/product' component={ Product } />
                    <Route path="/content/:aid" component={ NewsInfo } />
                    <Route path="/productContent" component={ ProductInfo } />
                </Router> // exact 表示严格匹配
        );
    }
}

export default MyRoute;