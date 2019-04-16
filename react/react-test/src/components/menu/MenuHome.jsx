import React from 'react';
import axios from 'axios'
import '../../assets/css/list.css'

import { Link } from "react-router-dom";

class MenuHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            list: [],
            domain: 'http://a.itying.com/'
         };
    }

    requestData = () =>{
        let api = this.state.domain + 'api/productlist'
        axios.get(api)
        .then(res =>{
           this.setState({
               list: res.data.result
           })
        })
        .catch(err =>{
            console.log(err)
        })
    }

    componentDidMount () {
        this.requestData ()
    }

    render() {
        return (
           <div className="menuHome">

                <button><Link to='/login'>跳转到登录页面</Link></button>
            
               <div className="list">
                    {
                        this.state.list.map(
                            (val, key) => 
                            <div className="item" key={ key }>
                                <h3 className="item_cate">{ val.title }</h3>

                                <ul className="item_list">
                                        {
                                            val.list.map(
                                                (list, listkey)=>
                                                    <li key={ listkey }>
                                                    <Link to={ `/menuInfo/${list._id}` }>
                                                        <div className="inner">
                                                            <img src={ `${this.state.domain}${list.img_url}` } alt="" />
                                                            <p className="title">{ list.title }</p>
                                                            <p className="price">{ list.price } {'￥'}</p>
                                                        </div>
                                                    </Link>
                                                    </li>
                                            )
                                        }
                                        
                                    </ul>
                            </div>
                        )
                    }
               </div> 
           </div>
        );
    }
}

export default MenuHome;