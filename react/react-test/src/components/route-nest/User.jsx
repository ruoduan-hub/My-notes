import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios'

import Main from './User/Main'
import UserInfo from './User/UserInfo'

class User extends React.Component {
    state = {  }

    componentDidMount () {
        console.log( this.props.childrenRoute)
        axios.get("/api")
        .then(res =>{
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
     }

    render() {
        return (
            <Router>
            <div className="user">
                <div className="content">
                
                    <div className="left">
                        <Link to={`${this.props.match.url}`}>个人信息</Link>
                        <br /><br />
                        <Link to={`${this.props.match.url}/info`}>用户信息</Link>
                    </div>


                    <div className="right">
                        {/* <Route exact path={`${this.props.match.url}`} component={Main} />
                        <Route path={`${this.props.match.url}/info`} component={UserInfo} /> */}

                        {
                            this.props.childrenRoute.map(
                                (route, key) =>
                                <Route key={key} exact path={route.path} component={route.component} />
                            )
                        }
                    </div>
                </div>
            </div>
            </Router>
        );
    }

    
}

export default User;