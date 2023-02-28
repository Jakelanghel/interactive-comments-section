import React from "react";
import { StyledCommentInput } from "../comment-input/CommentInput.Styled";

const CommentInput = (props) => {
  const {
    userImg,
    setCommentData,
    commentData,
    inputRef,
    currentUser,
    commentArr,
    selectedComment,
    commentId,
  } = props;

  const getNewId = () => {
    let id = 1;
    commentData.comments.forEach((comment) => {
      id += 1;
      id += comment.replies.length;
    });
    return id;
  };

  const handleClick = () => {
    inputRef.current.value.charAt(0) === "@" ? addReply() : addComment();
  };

  const addReply = () => {
    const repUsrName = inputRef.current.value.split(" ")[0].slice(1);
    const content = inputRef.current.value.split(" ").slice(1).join(" ");

    const newReply = {
      id: getNewId(),
      content: content,
      createdAt: "Now",
      score: 0,
      replyingTo: repUsrName,
      user: {
        image: currentUser.image,
        username: currentUser.username,
      },
    };

    const newCommentArr = commentArr.map((comment) => {
      if (comment.id === selectedComment) {
        return { ...comment, replies: [...comment.replies, newReply] };
      } else {
        return comment;
      }
    });
    setCommentData((oldData) => ({ ...oldData, comments: newCommentArr }));
    inputRef.current.value = "";
  };

  const addComment = () => {
    const newComment = {
      id: getNewId(),
      content: inputRef.current.value,
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

    inputRef.current.value = "";
  };

  return (
    <StyledCommentInput>
      <textarea
        id="commentInput"
        placeholder="Add a comment..."
        ref={inputRef}
      />

      <div className="container-input-btn">
        <img src={userImg} alt="" />
        <button onClick={handleClick}>send</button>
      </div>
    </StyledCommentInput>
  );
};

export default CommentInput;
