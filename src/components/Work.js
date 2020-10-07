import React, { Component } from "react";
import { ReactComponent as Node } from "../assets/devIcons/node.svg";
import { ReactComponent as Express } from "../assets/devIcons/express.svg";
import { ReactComponent as ReactLogo } from "../assets/devIcons/react.svg";
import { ReactComponent as Vue } from "../assets/devIcons/vue.svg";
import { ReactComponent as Rails } from "../assets/devIcons/rails.svg";
import { ReactComponent as Ruby } from "../assets/devIcons/ruby.svg";
import { ReactComponent as Grub } from "../assets/grub.svg";
import GiveScreenshot from "../assets/GiveScreenshot2.png";
import GrowScreenshot from "../assets/GrowScreenshot.png";
import downArrow from "../assets/down_arrow.png";
import "../App.css";

class Work extends Component {
  render() {
    return (
      <div className="workContainer">
        <div className="introContainer">
          <div className="centerHeader">
            <h1>Work.</h1>
          </div>
          <div className="devIcons">
            <Node className="devIcon" />
            <Express className="devIcon" />
            <ReactLogo className="devIcon" />
            <Vue className="devIcon" />
            <Ruby className="devIcon" />
            <Rails className="devIcon" />
          </div>
          <br />
          <br />
          <h2 className="centerText">
            Over the past few years, I have worked with numerous web
            technologies and am constantly iterating on my skills by building
            numerous projects.
          </h2>
        </div>
        <img className="scroll" src={downArrow} alt="Scroll Arrow" />
        <div className="portfolioDisplay">
          <div className="portfolioItem">
            <Grub className="grub" />
            <div className="projectDesc">
              <h1>Grub.</h1>
              <p>
                An <span>IOS</span> app that uses the Meetups API to find events
                with Free Pizza and Beer near you. Built with React Native,
                Meetup API.
              </p>
              {/* <br />
							<h5><span><a href="https://itunes.apple.com/us/app/grub/id1434454949?mt=8" target="_blank" rel="noopener noreferrer">Available here.</a></span></h5>				 */}
            </div>
          </div>

          <div className="portfolioItem" style={{ marginTop: "90px" }}>
            <div className="projectDesc">
              <h1>Give.</h1>
              <p>
                An <span>IOS</span> app that rounds up the change from your
                recent transactions and donates it to a charity of your choice.
                Built with React Native, Node/Express, Firebase, Plaid.
              </p>
            </div>
            <div
              style={{
                maxHeight: "800px",
                borderRadius: "55px",
                backgroundPosition: "cover",
                overflow: "hidden",
                boxShadow: "8px 8px 20px 0px #cccccc",
              }}
            >
              <img
                src={GiveScreenshot}
                style={{ height: "100%", width: "100%", marginTop: "5px" }}
              />
            </div>
          </div>

          <div className="portfolioItem" style={{ marginTop: "90px" }}>
            <div
              style={{
                textAlign: "left",
                maxHeight: "815px",
                borderRadius: "55px",
                backgroundPosition: "cover",
                overflow: "hidden",
                boxShadow: "8px 8px 20px 0px #cccccc",
              }}
            >
              <img
                src={GrowScreenshot}
                style={{ height: "100%", width: "100%", marginTop: "5px" }}
              />
            </div>
            <div className="projectDesc">
              <h1>Grow.</h1>
              <p>
                An <span>IOS</span> investment app designed to donate all
                proceeds to a charity of the users choice. Built with React
                Native, Node/Express.
              </p>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="endText">
          <h1 className="centerText">More Coming Soon.</h1>
          <p>
            I’m sure you can tell, I’m a beginner at all this design stuff. I
            have made other projects and am working on more right now, but
            creating these things takes time. I’ll be updating this page{" "}
            <b>REALLY</b> soon. Pinky Promise.
            <br />
            Stay Tuned.
          </p>
        </div>
        <br />
      </div>
    );
  }
}

export default Work;
