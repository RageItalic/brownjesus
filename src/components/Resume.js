import React, { Component } from "react";
import downArrow from "../assets/down_arrow.png";
import "../App.css";

class Resume extends Component {
  render() {
    return (
      <div className="resumeContainer">
        <div className="centerHeader">
          <h1>Resume.</h1>
        </div>
        <br />
        <div className="aboutSection">
          <h2 className="underline">About</h2>
          <br />
          <p>
            I am a Web Developer obsessed with mastering the full stack driven
            by the fact that the apps that I can build can create change in the
            real wold and affect lives. My strength and interests lie in
            conquering the full stack. I want to work at a company trying to
            solve a challenging, real world problem so that I can see how much
            work goes into creating real change. On my breaks from coding, I try
            to cook food from different parts of the world and catch up on
            movies and tv shows, like every other twenty year old.
          </p>
        </div>
        <img className="scroll" src={downArrow} alt="Scroll Arrow" />
        <div className="workSection">
          <h2 className="underline">Work Experience</h2>
          <div className="work1">
            <div className="title">
              <h2>Hatch Coding</h2>
              <p>Coach | Nov, 2019 – Current</p>
            </div>
            <div className="workDesc">
              <p>
                Work with teens and preteens in a project based learning format
                to guide them through the process of learning Javascript and
                Python. Day to day consists of leading small lessons on logical
                and computational thinking, breaking down both logical and
                syntactical concepts of both languages and demonstrating how to
                use them in various projects.
              </p>
            </div>
          </div>
          <div className="work2">
            <div className="title">
              <p>Lead Developer (Part-Time Contract) | Dec, 2017 – Apr, 2018</p>
              <h2>CaloBox</h2>
            </div>
            <div className="workDesc">
              <p>
                Worked remotely (from a different timezone) as the lead and only
                developer for a food based startup in India. Due to the nature
                of the company and its requirements, I had to work under a lot
                of constraints and meet difficult deadlines with multiple new
                feature requests daily. This did not allow me to write unit
                tests and have redundancy for the data but I learnt how to be
                quick enough to get the desired results.
              </p>
              <br />
              <ul>
                <li>
                  <p>
                    Designed and built the web application from the ground up
                    using Postgres, Node.js, Ejs (template engine), jQuery,
                    AirTable and other tools.
                  </p>
                </li>
                <li>
                  <p>
                    Worked with logistics companies and integrated their APIs in
                    addition to multiple third party apis.
                  </p>
                </li>
                <li>
                  <p>
                    Monitored and analyzed traffic, fixed bugs in a live
                    environment in addition to optimizing the app for production
                    and deploying the app.
                  </p>
                </li>
                <li>
                  <p>Used Git and Github for version control.</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="work1">
            <div className="title">
              <h2>Elecsoft Consulting</h2>
              <p>Web Development Intern | Jul, 2017 – Sep, 2017</p>
            </div>
            <div className="workDesc">
              <p>
                I worked at a QA consulting company that is currently expanding
                into web design and development. Although my position was that
                of an intern, I was the only one focusing full time on
                developing and writing quality code that was deployed on
                production servers. Along with building applications for
                clients, I also built multiple in-house tools to streamline
                daily workflow.
              </p>
              <br />
              <ul>
                <li>
                  <p>Redesigned and rebuilt the website.</p>
                </li>
                <li>
                  <p>
                    Helped with optimizing it for search engines to the point
                    where it is the first result on google.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="eduSection">
          <h2 className="underline">Education</h2>
          <div className="edu1">
            <div className="title">
              <h2>York University</h2>
              <p>Bachelors - Computer Science | Aug, 2018 – Current</p>
            </div>
            <div className="eduDesc">
              <p>
                Currently enrolled at York University studying Computer Science.
              </p>
            </div>
          </div>
          <div className="edu2">
            <div className="title">
              <p>Web Development | Feb, 2017 – Apr, 2017</p>
              <h2>Lighthouse Labs</h2>
            </div>
            <div className="eduDesc">
              <p>Two month full time immersive web development course.</p>
            </div>
          </div>
          <div className="edu1">
            <div className="title">
              <h2>Penn State University</h2>
              <p>Bachelors - Electrical Eng | Aug, 2016 – Dec, 2016</p>
            </div>
            <div className="eduDesc">
              <p>
                Enrolled in August 2016 for an intended major of Electrical
                Engineering. One semester after enrolling, I decided to take a
                year long leave of absence as I decided that there are other
                things that I would like to learn and try out before I go back
                to university.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
