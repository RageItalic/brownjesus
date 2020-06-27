import React, { Component } from "react";
import { Link } from "react-router-dom";
import { mockBlogData } from "../blogSeries/blogSeriesInfo";

const Blog = (props) => {
  return (
    <div className="blogContainer">
      <div className="centerHeader">
        <h1>Blog.</h1>
      </div>
      <div className="blogPostRow">
        {/* map over blog series here */}
        {mockBlogData.map((blogSeries) => {
          return (
            <Link
              to={{
                pathname: `/blog/${blogSeries.urlString}`,
                state: {
                  id: blogSeries.id,
                  title: blogSeries.title,
                  accentColor: blogSeries.accentColor,
                },
              }}
              style={{ textDecoration: "none" }}
            >
              <div className="blogSeriesCard" key={blogSeries.id}>
                <h1>{blogSeries.title}</h1>
                <div
                  className="blogCardAccent"
                  style={{ backgroundColor: blogSeries.accentColor }}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
