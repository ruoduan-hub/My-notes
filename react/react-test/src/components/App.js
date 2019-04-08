import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom'
import Home from './Home'
import News from './News'
import Func from './Func'
import Event from './EventObj'
import List from './List'
import ReactForm from './ReactForm'
import ToDoList from './ToDoList'
// import  '../assets/css/App.css'

import MyRoute from './MyRoute'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Home /> */}
        <MyRoute />
        



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
