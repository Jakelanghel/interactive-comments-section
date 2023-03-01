import React from "react";
import VoteActions from "../actions/vote-actions/VoteActions";

const CommentActions = (props) => {
  const {
    isCurrUsr,
    replyId,
    data,
    icons,
    commentArr,
    setCommentData,
    inputRef,
    userName,
    commentId,
    id,
    selectedComment,
  } = props;

  const handleReply = () => {
    // Scroll to input
    inputRef.current.scrollIntoView({ behavior: "smooth" });
    // Add user name of recipient
    inputRef.current.value = `@${userName} `;
    // Set selected comment to the commentId that we are replying to
    setCommentData((oldState) => ({ ...oldState, selectedComment: commentId }));
  };

  const handleDelete = () => {
    // Filter commentsArr returning all comments that don't match id
    let updatedComments = commentArr.filter((comment) => comment.id !== id);
    // Filter each comments replies array returning all replies that don't match id
    updatedComments = updatedComments.map((comment) => {
      const updatedReplies = comment.replies.filter((reply) => reply.id !== id);
      // Replace replies arr with new filtered arr
      const updatedComment = { ...comment, replies: updatedReplies };
      return updatedComment;
    });
    setCommentData((oldState) => ({ ...oldState, comments: updatedComments }));
  };

  const handleEdit = () => {
    setCommentData((oldState) => ({
      ...oldState,
      selectedComment: id,
      edit: true,
    }));
    inputRef.current.scrollIntoView({ behavior: "smooth" });

    let content = null;
    commentArr.forEach((comment) => {
      comment.id === id ? (content = comment.content) : null;
      comment.replies.forEach((reply) => {
        reply.id === id ? (content = reply.content) : null;
      });
    });
    inputRef.current.value = content;
  };

  return (
    <div className="container-actions">
      <VoteActions
        commentId={data.id}
        replyId={replyId}
        score={data.score}
        plusIcon={icons.plusIcon}
        minusIcon={icons.minusIcon}
        commentArr={commentArr}
        setCommentData={setCommentData}
      />

      {isCurrUsr ? (
        <div className="container-usr-actions">
          <button className="delete-btn" onClick={handleDelete}>
            <img src={icons.deleteIcon} alt="" />
            delete
          </button>
          <button className="edit-btn" onClick={handleEdit}>
            <img src={icons.editIcon} alt="" /> edit
          </button>
        </div>
      ) : (
        <button className="reply-btn" onClick={handleReply}>
          <img src={icons.replyIcon} alt="" className="reply-img" /> reply
        </button>
      )}
    </div>
  );
};

export default CommentActions;
