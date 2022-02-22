import React, { Component } from "react";
import moment from "moment";
import { Input, Button, Alert } from "antd";

const { TextArea } = Input;

export default class CommentInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
    };
  }

  render() {
    return (
      <div
        style={{
          width: "400px",
          paddingLeft: "20px",
          boxSizing: "content-box",
        }}
      >
        <TextArea
          rows={4}
          value={this.state.content}
          onChange={this.handleChange}
        />
        <Button
          type="primary"
          onClick={this.submitComment}
          style={{ marginTop: "20px" }}
        >
          添加评论
        </Button>
        {this.state.isShowTip && <Alert message="内容不能为空!" type="error" style={{ marginTop: "20px" }}/>}
      </div>
    );
  }

  handleChange = (event) => {
    this.setState({
      content: event.target.value,
      isShowTip: false,
    });
  };

  submitComment = () => {
    if(!this.state.content) {
      this.setState({isShowTip: true});
      return;
    }

    const commentInfo = {
      id: moment().valueOf(),
      avatar: "https://gitee.com/sherlinz0/img-storage/raw/master/avatar.png",
      userName: "sherlinz0",
      dateTime: moment(),
      content: this.state.content,
    };

    this.setState({ content: "" });
    this.props.submitComment(commentInfo);
  };
}
