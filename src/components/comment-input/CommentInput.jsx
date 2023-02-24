import React from "react";
import { StyledCommentInput } from "../comment-input/CommentInput.Styled";

const CommentInput = (props) => {
  return (
    <StyledCommentInput>
      <textarea id="commentInput" placeholder="Add a comment..." />

      <div className="container-input-btn">
        <img src={props.tstImg} alt="" />
        <button>send</button>
      </div>
    </StyledCommentInput>
  );
};

export default CommentInput;
