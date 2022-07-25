import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Work from "./components/Work";
import About from './components/About';
import Blog from "./components/Blog";
import BlogSeries from "./components/BlogSeries";
import BlogPost from "./components/BlogPost";
import Footer from "./components/Footer";
import MyGoals from './blogSeries/MyGoals'
import MyVision from "./blogSeries/MyVision";
import "./App.css";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/work" component={Work} />
            <Route path="/about" component={About} />
            <Route exact path="/blog" component={Blog} />
            {/* <Route exact path="/blog/my-goals" component={MyGoals} />
            <Route exact path="/blog/my-vision" component={MyVision} /> */}
            {/* <Route exact path="/blog/:seriesTitle" component={BlogSeries} />
            <Route path="/blog/:seriesTitle/:post" component={BlogPost} /> */}
            <Route component={() => <div style={{display: "flex", justifyContent: "center", width: "100%", height: "55vh", alignItems: "center"}}><h1>404.</h1></div>} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
