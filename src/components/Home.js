import React, { Component } from "react";
import me from "../assets/me.JPG";
import "../App.css";

class Home extends Component {
  render() {
    return (
      <div className="landing">
        <div className="landingWrapper">
          <div className="landingLeft">
            <h1>Hi,</h1>
            <br />
            <h2>
              I am a{" "}
              <span>
                Full Stack <br />
                Developer
              </span>
              ,{" "}
              <span>
                Wannabe <br />
                Pizzaiolo
              </span>,{" "}
              <span>
                Surf <br />
                Enthusiast
              </span> {" "}
              and{" "}
              <span>
                Life Long <br />
                Beginner
              </span>
              .
            </h2>
            <br />
            <h2>
              Welcome to my little <br />
              corner of the Interwebs.
            </h2>
          </div>
          <div className="landingRight">
            <img
              src={me}
              alt="Parth Patel Img"
              style={{ height: 500, borderRadius: 10 }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
