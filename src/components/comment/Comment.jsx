import React from "react";
import { StyledComment } from "./Comment.Styled";
import VoteActions from "./vote-actions/VoteActions";

const Comment = (props) => {
  const {
    data,
    icons,
    inputRef,
    className,
    userImg,
    userName,
    currentUser,
    commentArr,
    setCommentData,
    commentId,
    replyId,
  } = props;

  const isCurrUsr = currentUser === userName ? true : false;

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
    if (!replyId) {
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

    // const updatedComments = commentArr.filter((comment) => {
    //   if (comment.id !== selectedComment) {
    //     if (comment.replies.length === 0) {
    //       return comment;
    //     } else {
    //       comment.replies.filter((reply) => reply.id !== selectedComment);
    //     }
    //   }
    // });

    // console.log(updatedComments);
  };

  return (
    <StyledComment>
      <div className={className}>
        <div className="header">
          <img src={userImg} alt="" className="avatar-img" />
          <p className="user-name">{userName}</p>
          {isCurrUsr ? <p className="usr-tag">you</p> : null}
          <p className="date">{data.createdAt}</p>
        </div>

        <div className="container-body">
          <p className="body">
            {replyId && <span className="reply-tag">@{data.replyingTo}</span>}
            {data.content}
          </p>
        </div>

        {isCurrUsr ? (
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

            <div className="container-usr-actions">
              <button className="delete-btn" onClick={handleDelete}>
                <img src={icons.deleteIcon} alt="" />
                delete
              </button>
              <button className="edit-btn">
                <img src={icons.editIcon} alt="" /> edit
              </button>
            </div>
          </div>
        ) : (
          <div className="container-actions">
            <VoteActions
              score={data.score}
              plusIcon={icons.plusIcon}
              minusIcon={icons.minusIcon}
              setCommentData={setCommentData}
              commentId={data.id}
              replyId={replyId}
              commentArr={commentArr}
            />

            <button className="reply-btn" onClick={handleReply}>
              <img src={icons.replyIcon} alt="" className="reply-img" /> reply
            </button>
          </div>
        )}
      </div>
    </StyledComment>
  );
};

export default Comment;
