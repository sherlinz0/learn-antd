import React, { PureComponent } from "react";
import { Comment, Avatar, Tooltip } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

export default class CommentItem extends PureComponent {
  render() {
    const { userName, avatar, content, dateTime } = this.props.comment;

    return (
      <div style={{ paddingLeft: "20px" }}>
        <Comment
          author={<a href="https://github.com/sherlinz0">{userName}</a>}
          avatar={<Avatar src={avatar} alt={userName} />}
          content={<p>{content}</p>}
          datetime={
            <Tooltip title={dateTime.format("YYYY-MM-DD HH:mm:ss")}>
              <span>{dateTime.fromNow()}</span>
            </Tooltip>
          }
          actions={[
            <span onClick={this.handleDeleteClick}>
              <DeleteOutlined />
              删除
            </span>,
          ]}
        />
      </div>
    );
  }

  handleDeleteClick = () => {
    this.props.deleteComment(this.props.index);
  };
}
