import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            newsList: [
                {aid: '1', title: '新闻详情1'},
                {aid: '2', title: '新闻详情2'},
                {aid: '3', title: '新闻详情3'},
                {aid: '4', title: '新闻详情4'},
            ]
         };
    }
    render() {
        return (
            <div>
                <h4>新闻组件</h4>
                {
                    this.state.newsList.map(
                        (val, key)=> <li key={key}>
                            <Link to={`/content/${val.aid}`}>{ val.title }</Link>
                        </li>
                        
                        )
                }
            </div>
        );
    }
}

export default News;