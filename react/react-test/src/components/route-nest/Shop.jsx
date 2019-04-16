import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Cart from './Shop/Cart'
import Order from './Shop/Order'


class Shop extends React.Component {
    state = { 

     }
     
    render() {
        return (
           <Router>
               <div className="content">
                    <div className="left">
                        <Link to={`${this.props.match.url}`} >订单</Link>
                        <br />
                        <br />
                        <Link to={`${this.props.match.url}/cart`}>购物车</Link>
                    </div>

                    <div className="right">
                        <Route exact path={`${this.props.match.url}`} component={Order} />
                        <Route  path={`${this.props.match.url}/cart`} component={Cart} />
                    </div>
               </div>
           </Router>
        );
    }
}

export default Shop;