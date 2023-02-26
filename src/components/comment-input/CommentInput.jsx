import React, { useRef } from "react";
import { StyledCommentInput } from "../comment-input/CommentInput.Styled";

const CommentInput = (props) => {
  const { setCommentData, commentData } = props;

  const getNewCommentId = () => {
    let id = 1;
    commentData.comments.forEach((comment) => {
      id += 1;
      id += comment.replies.length;
    });
    return id;
  };

  const addComment = () => {
    const newComment = {
      id: getNewCommentId(),
      content: commentRef.current.value,
      createdAt: "Now",
      score: 0,
      user: {
        image: commentData.currentUser.image,
        username: commentData.currentUser.username,
      },
      replies: [],
    };

    setCommentData((oldData) => ({
      ...oldData,
      comments: [...oldData.comments, newComment],
    }));

    commentRef.current.value = "";
  };

  const commentRef = useRef();
  return (
    <StyledCommentInput>
      <textarea
        id="commentInput"
        placeholder="Add a comment..."
        ref={commentRef}
      />

      <div className="container-input-btn">
        <img src={props.tstImg} alt="" />
        <button onClick={addComment}>send</button>
      </div>
    </StyledCommentInput>
  );
};

export default CommentInput;
