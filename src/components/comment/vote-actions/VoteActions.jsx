import React, { useState } from "react";
import CommentInput from "../../comment-input/CommentInput";
import { StyledVoteActions } from "./VoteActions.Styled";

const VoteActions = (props) => {
  const { id, score, plusIcon, minusIcon, commentArr, setCommentData } = props;

  const handleClick = (e) => {
    const op = e.target.classList[0];
    const updatedComments = commentArr.map((comment) => {
      if (comment.id === id) {
        return {
          ...comment,
          score: op === "plus" ? comment.score + 1 : comment.score - 1,
        };
      } else {
        if (comment.replies.length === 0) {
          return comment;
        } else {
          const repliesArr = comment.replies.map((reply) =>
            reply.id === id
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
      <button onClick={handleClick} className="plus">
        <img src={plusIcon} alt="" className="plus" />
      </button>
      <p className="score">{score}</p>
      <button onClick={handleClick}>
        <img src={minusIcon} alt="" />
      </button>
    </StyledVoteActions>
  );
};

export default VoteActions;
