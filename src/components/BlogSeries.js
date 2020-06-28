import React, { Component } from "react";
import { Link } from "react-router-dom";
import urlSlug from "url-slug";
import { blogSeriesData } from "../blogSeries/blogSeriesInfo";

//changed this back to class component for now...
//need to upgrade react before using hooks.. so no point using
//functional components
class BlogSeries extends Component {
  state = {
    loading: true,
    seriesInfo: null,
    seriesTitle: null,
    seriesAccentColor: null,
    posts: null,
    error: false,
    errorMsg: null,
  };

  componentDidMount() {
    console.log("HELLO", this.props.location);

    const seriesPath = this.props.location.pathname
      .split("/")[2]
      .split("-")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join("-");

    let postUrls, seriesTitle, seriesAccentColor;

    switch (seriesPath) {
      case "Currently-Learning":
        seriesTitle = "Currently Learning";
        seriesAccentColor = blogSeriesData["Currently Learning"].accentColor;
        postUrls = require
          .context("../blogSeries/Currently-Learning", true, /\.md$/)
          .keys();
        break;
      case "Design-101":
        seriesTitle = "Design 101";
        seriesAccentColor = blogSeriesData["Design 101"].accentColor;
        postUrls = require
          .context("../blogSeries/Design-101", true, /\.md$/)
          .keys();
        break;
      case "Past-Project-Breakdown":
        seriesTitle = "Past Project Breakdown";
        seriesAccentColor =
          blogSeriesData["Past Project Breakdown"].accentColor;
        postUrls = require
          .context("../blogSeries/Past-Project-Breakdown", true, /\.md$/)
          .keys();
        break;
      case "To-Leet-Code-And-Beyond":
        seriesTitle = "To LeetCode and Beyond";
        seriesAccentColor =
          blogSeriesData["To LeetCode and Beyond"].accentColor;
        postUrls = require
          .context("../blogSeries/To-Leet-Code-And-Beyond", true, /\.md$/)
          .keys();
        break;
      default:
        seriesTitle = "Under Construction";
        seriesAccentColor = blogSeriesData["Under Construction"].accentColor;
        postUrls = require
          .context("../blogSeries/Under-Construction", true, /\.md$/)
          .keys();
        break;
    }

    if (postUrls.length > 0) {
      const postTitles = postUrls.map((url) => {
        let title = urlSlug.revert(url);
        title = title.replace("/", "").replace(" md", "");
        return title;
      });

      this.setState({
        loading: false,
        seriesInfo: this.props.location.state,
        seriesTitle,
        seriesAccentColor,
        posts: postTitles,
      });
    } else {
      this.setState({
        loading: false,
        error: true,
        errorMsg: "This series has no posts yet...",
      });
    }
  }

  render() {
    const {
      seriesInfo,
      seriesTitle,
      seriesAccentColor,
      loading,
      posts,
      error,
      errorMsg,
    } = this.state;

    if (loading) {
      return (
        <div className="blogSeries">
          <div className="centerHeader">
            <h1>Loading...</h1>
          </div>
        </div>
      );
    }

    if (error) {
      return (
        <div
          className="blogSeries"
          style={{ minHeight: "calc(100vh - 250px)" }}
        >
          <div className="centerHeader">
            <h1>{errorMsg}</h1>
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
              textDecorationColor: seriesAccentColor,
            }}
          >
            {seriesTitle || seriesInfo.title}
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
                      accentColor: seriesAccentColor,
                    },
                  }}
                  style={{ textDecoration: "none" }}
                >
                  <div className="blogSeriesCard" key={index}>
                    <h1>{post}</h1>
                    <div
                      className="blogCardAccent"
                      style={{ backgroundColor: seriesAccentColor }}
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
