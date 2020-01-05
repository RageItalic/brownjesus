import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import Resume from './components/Resume'
import Work from './components/Work'
import Blog from './components/Blog'
import Footer from './components/Footer'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/resume" component={Resume} />
            <Route path="/work" component={Work} />
            <Route path="/blog" component={Blog} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
