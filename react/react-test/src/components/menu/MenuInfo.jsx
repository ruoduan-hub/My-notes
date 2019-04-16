import React from 'react';
import axios from 'axios'
import { Link } from "react-router-dom";
import '../../assets/css/MenuInfo.css'

class MenuInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            list: [],
            domain: 'http://a.itying.com/'
         };
    }

    componentDidMount () {
        console.log(this.props.match.params.id)
        let id = this.props.match.params.id
        this.requestData(id)
    }

    requestData (id) {
        let api = this.state.domain + 'api/productcontent?id=' +id
        axios.get(api)
        .then(res =>{
           this.setState({
               list: res.data.result[0]
           })
        })
        .catch(err =>{
            console.log(err)
        })
    }

    render() {
        return (
            <div className="MenuInfo">
                <div className="back"><Link to="/">返回</Link></div>

                <div className="p_content">
                    <div className="p_info">
                    { this.state.list.img_url ? <img src={ `${this.state.domain}${this.state.list.img_url}` } alt="" /> : ''}
                        <h2> {this.state.list.title} </h2>
                        <p className="price">{this.state.list.price} 元/份</p>
                    </div>
                    <div className="p_detial">
                        <h3>
                            商品详情
				        </h3>
                        <div className="p_content"  dangerouslySetInnerHTML={{ __html: this.state.list.content }} >
                            {/* { this.state.list.content } */}
                        </div>
                    </div>
                </div>


                <footer className="pfooter">

                    <div className="cart">
                        <strong>数量:</strong>
                        <div className="cart_num">
                            <div className="input_left">-</div>
                            <div className="input_center">
                                <input type="text" readOnly="readnly" value="1" name="num" id="num" />
                            </div>
                            <div className="input_right">+</div>
                        </div>

                    </div>

                    <button className="addcart">加入购物车</button>
                </footer>
            </div>
        );
    }
}

export default MenuInfo;