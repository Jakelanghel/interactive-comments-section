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
  } = props;

  const handleReply = () => {
    inputRef.current.scrollIntoView({ behavior: "smooth" });
    inputRef.current.value = `@${userName} `;
    setCommentData((oldState) => ({ ...oldState, selectedComment: commentId }));
  };

  const deleteComment = () => {
    const updatedComments = commentArr.filter(
      (comment) => comment.id !== commentId
    );
    return updatedComments;
  };

  const deleteReply = () => {
    console.log("X");
    const updatedComments = commentArr.map((comment) => {
      if (comment.replies.length === 0) return comment;
      else {
        const updatedReplies = comment.replies.filter(
          (reply) => reply.id !== replyId
        );
        console.log(updatedReplies);
        return { ...comment, replies: updatedReplies };
      }
    });
    return updatedComments;
  };

  const handleDelete = () => {
    console.log(replyId);
    if (!replyId) {
      console.log("X");
      const updatedComments = deleteComment();
      setCommentData((oldState) => ({
        ...oldState,
        comments: updatedComments,
      }));
    }
    if (replyId) {
      const updatedComments = deleteReply();
      setCommentData((oldState) => ({
        ...oldState,
        comments: updatedComments,
      }));
    }
  };

  const handleEdit = () => {};

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
          <button className="edit-btn">
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
