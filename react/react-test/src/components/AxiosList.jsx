import React from 'react'
import axios from 'axios'
import fetchJsonp from 'fetch-jsonp'

class AxiosList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[]
         };
    }

    getServerData = () => {
        // axios.get('http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20')
        //     .then((res)=>{
        //         console.log(res.data.result)
        //         this.setState({
        //             list: res.data.result
        //         })
        //     })
        //     .catch((err)=>{
        //         console.log(err)
        //     })
        
        // 原生的 fetch
        // fetch('http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20')
        //     .then((res) => {
        //         return res.json()
        //     })
        //     .then((res) => {
        //         console.log(res)
        //     })
        //     .catch((ree) => {
        //         console.log(ree)
        //     })

        fetchJsonp('http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20')
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                this.setState({
                    list: data.result
                })
            })
            .catch(err =>{
                console.log(err)
            })
        }

    render() {
        return (
            <div>
                <h2>axios</h2>
                <button onClick={this.getServerData}>获取服务器数据</button>

                <ul>
                    {
                        this.state.list.map(
                            (val, key) =>

                                <li key={ key }>
                                    { val.title } -----
                                    <span>{ val.aid }</span>
                                </li>  
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default AxiosList;