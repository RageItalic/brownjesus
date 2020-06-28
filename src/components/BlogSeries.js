import React, { Component } from "react";
import { Link } from "react-router-dom";
import urlSlug from "url-slug";

//changed this back to class component for now...
//need to upgrade react before using hooks.. so no point using
//functional components
class BlogSeries extends Component {
  state = {
    loading: true,
    seriesInfo: null,
    posts: null,
  };

  componentDidMount() {
    console.log("HELLO", this.props.location);

    const seriesPath = this.props.location.pathname
      .split("/")[2]
      .split("-")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join("-");

    let postUrls;

    switch (seriesPath) {
      case "Currently-Learning":
        postUrls = require
          .context("../blogSeries/Currently-Learning", true, /\.md$/)
          .keys();
        break;
      case "Design-101":
        postUrls = require
          .context("../blogSeries/Design-101", true, /\.md$/)
          .keys();
        break;
      case "Past-Project-Breakdown":
        postUrls = require
          .context("../blogSeries/Past-Project-Breakdown", true, /\.md$/)
          .keys();
        break;
      case "To-Leet-Code-And-Beyond":
        postUrls = require
          .context("../blogSeries/To-Leet-Code-And-Beyond", true, /\.md$/)
          .keys();
        break;
      default:
        postUrls = require
          .context("../blogSeries/Under-Construction", true, /\.md$/)
          .keys();
        break;
    }

    const postTitles = postUrls.map((url) => {
      let title = urlSlug.revert(url);
      title = title.replace("/", "").replace(" md", "");
      return title;
    });

    this.setState({
      loading: false,
      seriesInfo: this.props.location.state,
      posts: postTitles,
    });
  }

  render() {
    const { seriesInfo, loading, posts } = this.state;

    if (loading) {
      return (
        <div className="blogSeries">
          <div className="centerHeader">
            <h1>Loading...</h1>
          </div>
        </div>
      );
    }

    return (
      <div className="blogSeries">
        <div className="centerHeader">
          <h1
            style={{
              textDecoration: "underline",
              textDecorationColor: seriesInfo.accentColor,
            }}
          >
            {seriesInfo.title}
          </h1>

          <div className="blogPostRow">
            {/* map over blog series here */}
            {posts.map((post, index) => {
              return (
                <Link
                  to={{
                    pathname: `${this.props.location.pathname}/${urlSlug(
                      post
                    )}`,
                    state: {
                      id: index,
                      title: post,
                      accentColor: "red",
                    },
                  }}
                  style={{ textDecoration: "none" }}
                >
                  <div className="blogSeriesCard" key={index}>
                    <h1>{post}</h1>
                    <div
                      className="blogCardAccent"
                      style={{ backgroundColor: "red" }}
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default BlogSeries;
