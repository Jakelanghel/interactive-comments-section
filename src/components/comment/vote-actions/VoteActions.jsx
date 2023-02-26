import React, { useState } from "react";
import CommentInput from "../../comment-input/CommentInput";
import { StyledVoteActions } from "./VoteActions.Styled";

const VoteActions = (props) => {
  const { score, plusIcon, minusIcon, setCommentData, id } = props;

  const addVote = (e) => {
    setCommentData((oldData) => {
      // const comments = oldData.comments.map((comment) => {
      //   return comment.id !== id
      //     ? comment
      //     : { ...comment, score: comment.score + 1 };
      // });

      // ^^ this works but i need to figure out a way to add to the votes for replies

      return { ...oldData, comments: comments };
    });
  };

  const subVote = (e) => {};
  return (
    <StyledVoteActions>
      <button onClick={addVote}>
        <img src={plusIcon} alt="" />
      </button>
      <p className="score">{score}</p>
      <button onClick={subVote}>
        <img src={minusIcon} alt="" />
      </button>
    </StyledVoteActions>
  );
};

export default VoteActions;
