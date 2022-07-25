import React, { Component } from "react"
import me from "../assets/me.JPG";
import WhyMe from '../assets/ParthPatelWhyMe.m4v'
import '../App.css'


class About extends Component {
  render() {
    return (
      <div style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
        <h1>About Me</h1>
        <br />
       {/* <video src={WhyMe} autoPlay controls style={{width: 400, height: "auto"}} /> */}
        <br />
        <p>I, Parth Patel, am a computer science student at York university who is really interested in all things technology, food and travel. I like to think that what makes me stand out is the fact that I have a ton of experience with failure and use it not just as an opportunity to improve, but as an intense motivational tool that drives my actions.</p>
        <br />
        <p>I believe man is a product of his surroundings and I am extremely fortunate to have been raised in very diverse places. I’ve spent a lot of my youth in India, where I completed most of my school years. I then moved to Canada where I finished the last two years of high school while also having quite a few breakthroughs about who I am as an individual. I then attended university in the United States where I had the opportunity to realize the path I was on was not the one I wanted, rather it was the one I had been conditioned to want. Thus, I decided to take some time off and channeled all my energy into something that had always been of interest to me: <i>the intersection of entrepreneurship and technology</i>. Choosing this path is what brought me to where I am today.</p>
        <br />
        <p>In my life, I've had many low moments that have left me disheartened. However, I've never thought of them as failures. Rather I take them as learning opportunities that teach me how to humble myself and show me that I still have a lot to learn.</p>
        <br />
        <p>I have always been interested in programming, web development and more importantly, problem solving in general. I understand not just how important these skills are, but how powerful they are. I strongly believe that in the right hands, backed by the right mission, code can solve problems in almost every field. I’d love to be a part of that revolution because at least I’d be doing my part to make a positive impact. Apart from that, in my spare time, I love to cook and I try to work on small projects that actually attempt to solve real world problems.</p>
      </div>
    )
  }
}

export default About

