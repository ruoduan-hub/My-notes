import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './Home'
import News from './News'
import Func from './Func'
import Event from './EventObj'
import List from './List'
import ReactForm from './ReactForm'
import ToDoList from './ToDoList'
// import  '../assets/css/App.css'

import MenuHome from './menu/MenuHome'
import MenuInfo from './menu/MenuInfo'
import Login from './routes/Login'
import MyRoute from './MyRoute'

import router from '../models/router'


import '../assets/css/App.css'
import '../assets/css/route-nest.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Home /> */}
        {/* <MyRoute /> */}
{/* -------------------------------------------------*/ }
        {/* <Router>
            <Route path='/login' component={ Login } />

            <Route exact path="/" component={ MenuHome } />
            <Route path="/menuInfo/:id" component={ MenuInfo } />
        </Router> */}

{/** ----------------------------路由嵌套----------------------------------- */}
          <Router>
            <div>
            <header className="title">
              <Link to="/">首页</Link>
              <Link to="/user">用户页面</Link>
              <Link to="/shop">商品</Link>
              <Link to="/news">新闻</Link>
            </header>

            {/* <Route exact path="/" component={Rhome} />
            <Route exact path="/user" component={User} />
            <Route exact path="/shop" component={Shop} /> */}
            
            {/* <Route exact path="/user/" render = { props => (
              <route.component {...props} childRoute = {route.routes} />
            )}
            /> */}

            {
              router.map(
                (route, key) => {
                  if (route.exact) {
                    return (
                    <Route exact key={key} path={route.path}
                    render = {props => (
                      <route.component { ...props } routes = {route.routes} />
                    )}
                  />
                    )
                  }else{
                    return (  
                      <Route key={key} path={route.path}
                      render = {props => (
                        // <route.component {...props} childrenRoute = {route.routes} />
                        <route.component {...props} childrenRoute = {route.routes} />
                      )}/>
                      )
                  }
                }
                
              )
            }
            </div>
          </Router>
            
{/*------------------------------------------------------------------------ */}
        {/* <News />
        <Func /> */}
        {/* <Event />
        <List /> */}
        {/* <ReactForm /> */}
        {/* <ToDoList /> */}

        </div> 
      );
  
  }
}

export default App;
