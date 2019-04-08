import React from 'react'


class NewsInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            myid:''
         };
    }
    //获取动态路由
    componentDidMount () {
        console.log(this.props.match.params.aid);
        this.setState({
            myid: this.props.match.params.aid
        })
    }

    render() {
        return (
            <div>
                <h4>新闻详情--------------{this.state.myid}</h4>
            </div>
        );
    }
}

export default NewsInfo;