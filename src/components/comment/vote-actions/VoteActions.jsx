import React from "react";
import { StyledVoteActions } from "./VoteActions.Styled";

const VoteActions = (props) => {
  const { score, plusIcon, minusIcon } = props;
  return (
    <StyledVoteActions>
      <button>
        <img src={plusIcon} alt="" />
      </button>
      <p className="score">{props.score}</p>
      <button>
        <img src={minusIcon} alt="" />
      </button>
    </StyledVoteActions>
  );
};

export default VoteActions;
