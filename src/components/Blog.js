import React, { Component } from "react";
import { Link } from "react-router-dom";
import { blogSeriesData } from "../blogSeries/blogSeriesInfo";

class Blog extends Component {
  state = {
    loading: true,
    series: null,
  };

  componentDidMount() {
    let series = [];
    for (const blogSeries in blogSeriesData) {
      series.push(blogSeriesData[blogSeries]);
    }
    this.setState({
      loading: false,
      series,
    });
  }

  render() {
    let { loading, series } = this.state;

    if (loading) {
      return (
        <div className="blogContainer">
          <div className="centerHeader">
            <h1>Loading...</h1>
          </div>
        </div>
      );
    }

    return (
      <div className="blogContainer">
        <div className="centerHeader">
          <h1>Blog.</h1>
        </div>
        <div className="blogPostRow">
          {series.map((blogSeries) => {
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
                key={blogSeries.id}
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
  }
}

export default Blog;
