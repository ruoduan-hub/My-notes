import React from 'react';
import '../assets/css/news.css'
import img1 from '../assets/images/logo.svg'
export default class News extends React.Component{

    constructor (props) {
        super(props)
        this.state = {
            userInfo : '张三',
            list1: ['张三', '李四', '王五'],
            list2: [<h3 key='1'>哈哈</h3>, <h2 key='2'>嘻嘻</h2>],
            list3: [
                {title: '新闻'},
                {title: '热点'},
                {title: '每日'},
            ]
        }
    }


    render() {

        let listRes = this.state.list1.map(
            (val, key) => <li key={key}>{val}</li>
            )

        return (
            <div className='news'>
                <h3>{this.state.userInfo}</h3>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
            <hr />
            <img src={img1} alt=""/>
            <img src={require('../assets/images/logo.svg')} alt=""/>
            <hr />

            {this.state.list2}
            <hr />
            {listRes}
            <hr />
            <ul>
                {
                    this.state.list3.map(
                        (val ,key) => <li key={key}>{val.title}</li>
                    )
                }
            </ul>

        </div>
        )
    }
    
}

