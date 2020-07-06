import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import urlSlug from "url-slug";

class BlogPost extends Component {
  state = {
    loading: true,
    title: null,
    fileName: null,
    markdown: null,
  };

  async componentDidMount() {
    let title = await this.props.location.pathname
      .split("/")[3]
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    //const { title } = this.props.location.state;

    let parentDir = this.props.location.pathname
      .split("/")[2]
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("-");
    let fileName = `${urlSlug(title)}.md`
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("-");

    const file = await import("../blogSeries/" + parentDir + "/" + fileName);
    const response = await fetch(file.default);
    const text = await response.text();

    this.setState({
      loading: false,
      title,
      fileName,
      markdown: text,
    });
  }

  render() {
    //console.log(this.props.location);
    const { title, fileName, markdown, loading } = this.state;

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
      <div
        style={{
          minHeight: "calc(100vh - 250px)",
          marginLeft: "12%",
          marginRight: "12%",
        }}
      >
        <div className="centerHeader">
          <h1>{title}</h1>
        </div>
        <div>
          <ReactMarkdown source={markdown} escapeHtml={false} />
        </div>
      </div>
    );
  }
}

export default BlogPost;
