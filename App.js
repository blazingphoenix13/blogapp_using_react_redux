import React, { Component } from 'react'
import {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import CreatePosts from './components/CreatePosts'
import './App.css'


class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <ul>
        <li><Link to="/">Signup</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/create">Create Posts</Link></li>
        </ul>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/create" component={CreatePosts}/>
          <Route path="/" component={Signup}/>
          {/* <Route path="/login"><Login/></Route> */}
          {/* <Route path="/"><Signup/></Route>  */}
        </Switch>
      </div>
      </Router>
    )
  }
}

export default App
