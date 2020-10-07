import React, { Component } from "react";
import { Link } from "react-router-dom";
import { blogSeriesData } from "../blogSeries/blogSeriesInfo";

class Blog extends Component {
  render() {
    return (
      <div className="blogContainer">
        <div className="centerHeader">
          <h1>Blog Coming Really Soon.</h1>
        </div>
        <br />
        <br />
        <div className="textContainer centerText">
          <p>
            Hi! Fancy seeing you here. I have big plans for this blog and I'm
            almost done building it. Just need to figure out how to render code
            blocks in react-markdown, but school and what feels like an eternal
            job search keep getting in the way! Hopefully I can get it done
            super soon.
          </p>
          <br />
          <br />
          <p>
            I already have a couple posts ready to go, but overall the plan for
            this blog is to write all about my past projects, my journey into
            design, the aforementioned eternal job search and leetcode, the
            project(s) I'm currently working on and a few other things.
          </p>
          <br />
          <br />
          <p>Also, food. I'm probably going to write about food.</p>
          <br />
          <br />
          <p>Stay Tuned.</p>
        </div>
      </div>
    );
  }
}

// class Blog extends Component {
//   state = {
//     loading: true,
//     series: null,
//   };

//   componentDidMount() {
//     let series = [];
//     for (const blogSeries in blogSeriesData) {
//       series.push(blogSeriesData[blogSeries]);
//     }
//     this.setState({
//       loading: false,
//       series,
//     });
//   }

//   render() {
//     let { loading, series } = this.state;

//     if (loading) {
//       return (
//         <div className="blogContainer">
//           <div className="centerHeader">
//             <h1>Loading...</h1>
//           </div>
//         </div>
//       );
//     }

//     return (
//       <div className="blogContainer">
//         <div className="centerHeader">
//           <h1>Blog.</h1>
//         </div>
//         <div className="blogPostRow">
//           {series.map((blogSeries) => {
//             return (
//               <Link
//                 to={{
//                   pathname: `/blog/${blogSeries.urlString}`,
//                   state: {
//                     id: blogSeries.id,
//                     title: blogSeries.title,
//                     accentColor: blogSeries.accentColor,
//                   },
//                 }}
//                 key={blogSeries.id}
//                 style={{ textDecoration: "none" }}
//               >
//                 <div className="blogSeriesCard" key={blogSeries.id}>
//                   <h1>{blogSeries.title}</h1>
//                   <div
//                     className="blogCardAccent"
//                     style={{ backgroundColor: blogSeries.accentColor }}
//                   />
//                 </div>
//               </Link>
//             );
//           })}
//         </div>
//       </div>
//     );
//   }
// }

export default Blog;
