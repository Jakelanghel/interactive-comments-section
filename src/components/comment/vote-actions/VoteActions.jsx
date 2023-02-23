import React from "react";
import { StyledVoteActions } from "./VoteActions.Styled";

const VoteActions = (props) => {
  return (
    <StyledVoteActions>
      <button>+</button>
      <p className="score">{props.score}</p>
      <button>-</button>
    </StyledVoteActions>
  );
};

export default VoteActions;
