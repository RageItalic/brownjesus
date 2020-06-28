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
    const { title } = this.props.location.state;

    let parentDir = this.props.location.pathname
      .split("/")[2]
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("-");
    let fileName = `${urlSlug(title)}.md`
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("-");

    let fullPath = `../blogSeries/${parentDir}/${fileName}`;

    const file = await import("../blogSeries/" + parentDir + "/" + fileName);
    const response = await fetch(file.default);
    const text = await response.text();

    await this.setState({
      loading: false,
      title,
      fileName,
      markdown: text,
    });
  }

  render() {
    //console.log(this.props.location);
    const { title, fileName, markdown } = this.state;

    return (
      <div className="centerHeader">
        <h1>{title}</h1>
        <div>
          <ReactMarkdown source={markdown} />
        </div>
      </div>
    );
  }
}

export default BlogPost;
