import React from "react";
import { StyledComment } from "./Comment.Styled";
import VoteActions from "./vote-actions/VoteActions";

const Comment = () => {
  return (
    <StyledComment>
      <VoteActions />
    </StyledComment>
  );
};

export default Comment;
