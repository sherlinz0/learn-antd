import React, { PureComponent } from "react";
import CommentInput from "./components/CommentInput";
import CommentItem from "./components/CommentItem";

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      commentInfos: [],
    };
  }

  render() {
    return (
      <div>
        {this.state.commentInfos.map((item, index) => {
          return <CommentItem key={item.id} comment={item} index={index} deleteComment={this.deleteComment}/>;
        })}
        <CommentInput
          submitComment={this.addComment}
        />
      </div>
    );
  }

  addComment = (info) => {
    this.setState({ commentInfos: this.state.commentInfos.concat([info]) });
  };

  deleteComment = (index) => {
    const newComments = [...this.state.commentInfos];
    newComments.splice(index, 1);
    this.setState({ commentInfos: newComments });
  };
}
