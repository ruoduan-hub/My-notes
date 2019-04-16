import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from "react-router-dom";
  
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            loginflag: false,

         };
    }

    doLogin = () => {
        let usernae = this.refs.username.value
        let password = this.refs.password.value
        console.log(usernae, password)
        if (usernae == 'admin' && password == '123') {
            //登录成功 跳转到首页
            this.setState({
                loginflag: true
            })
        } else {
            alert('登录失败')
        }
    }

    submitInfo = (e) => {
        e.preventDefault()
        this.doLogin()
    }
    render() {

        if (this.state.loginflag) {
            return <Redirect to={{ pathname: "/" }} />
        }

        return (
            <div>

                <form action="">

                    <input ref='username' type="text" name="" id=""/> <br />

                    <input ref='password' type="password" name="" id=""/> <br />
                
                    <input onClick={ this.submitInfo } type="submit" value="执行登录"/>

                </form>

            </div>
        );
    }
}

export default Login;