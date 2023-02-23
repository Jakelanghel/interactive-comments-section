import React from "react";
import { StyledContainer } from "../ContainerStyled";
import VoteActions from "../vote-actions/VoteActions";

const Reply = (props) => {
  const { img, userName, date, body, score } = props;

  return (
    <StyledContainer>
      <div className="reply">
        <div className="header">
          <div className="header">
            <img src={img} alt="" />
            <p className="user-name">{userName}</p>
            <p className="date">{date}</p>
          </div>

          <button className="reply-btn">reply</button>
        </div>

        <div className="container-body">
          <p className="body">{body}</p>
        </div>
        <VoteActions score={score} />
      </div>
    </StyledContainer>
  );
};

export default Reply;
