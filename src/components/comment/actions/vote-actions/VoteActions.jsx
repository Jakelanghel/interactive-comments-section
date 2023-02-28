import React, { useState } from "react";
import { StyledVoteActions } from "./VoteActions.Styled";
const VoteActions = (props) => {
  const {
    commentId,
    replyId,
    score,
    plusIcon,
    minusIcon,
    commentArr,
    setCommentData,
  } = props;

  const handleVote = (e) => {
    const op = e.target.classList[0];
    const updatedComments = commentArr.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          score: op === "plus" ? comment.score + 1 : comment.score - 1,
        };
      } else {
        if (comment.replies.length === 0) {
          return comment;
        } else {
          const repliesArr = comment.replies.map((reply) =>
            reply.id === replyId
              ? {
                  ...reply,
                  score: op === "plus" ? reply.score + 1 : reply.score - 1,
                }
              : reply
          );
          return { ...comment, replies: repliesArr };
        }
      }
    });

    setCommentData((oldState) => ({ ...oldState, comments: updatedComments }));
  };

  return (
    <StyledVoteActions>
      <button onClick={handleVote} className="plus">
        <img src={plusIcon} alt="" className="plus" />
      </button>
      <p className="score">{score}</p>
      <button onClick={handleVote}>
        <img src={minusIcon} alt="" />
      </button>
    </StyledVoteActions>
  );
};

export default VoteActions;
