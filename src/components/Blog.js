import React, { Component } from "react";

class Blog extends Component {
  render() {
    return (
      <div className="blogContainer">
        <div className="centerHeader">
          <h1>Blog Coming Soon.</h1>
        </div>
        <br />
        <div className="textContainer">
          <p>
            My opinions are important, and thus, everyone must know what I am
            thinking at all times. <br /> <b>LOL. No, not really.</b>
          </p>
          <br />
          <p>
            There are a lot of things I dont know how to do. Sometimes they are
            tiny little detail oriented things (like how to animate a logo).
            Other times, they are much bigger and more important things (like
            using JWTs for authentication when your frontend and backend are
            seperate projects).
          </p>
          <br />
          <p>
            My goal for this blog is to write about and explain the things I
            didn’t know how to do myself. It’ll be mission accomplished if even
            one person doesn’t have to go through the same struggles I did.
          </p>
          <br />
          <p>Also, fooood. I'll probably write about food.</p>
        </div>
        {/* <br />
        <br />
        <br /> */}
      </div>
    );
  }
}

export default Blog;
