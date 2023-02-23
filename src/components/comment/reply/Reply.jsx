import React from "react";
import { StyledContainer } from "../ContainerStyled";
import VoteActions from "../vote-actions/VoteActions";

const Reply = (props) => {
  const {
    img,
    userName,
    date,
    body,
    score,
    currentUser,
    deleteIcon,
    editIcon,
    plusIcon,
    minusIcon,
  } = props;
  const isCurrUsr = currentUser === userName ? true : false;

  return (
    <StyledContainer>
      <div className="reply">
        <div className="header">
          <img src={img} alt="" />
          <p className="user-name">{userName}</p>
          {isCurrUsr ? <p>you</p> : null}
          <p className="date">{date}</p>
        </div>

        {isCurrUsr ? (
          <div className="container-reply-actions">
            <button className="delete-btn">
              <img src={deleteIcon} alt="" />
            </button>
            <button className="edit-btn">
              <img src={editIcon} alt="" />
            </button>
          </div>
        ) : (
          <div className="container-reply-actions">
            <button className="reply-btn">reply</button>
          </div>
        )}

        <div className="container-body">
          <p className="body">{body}</p>
        </div>
        <VoteActions score={score} plusIcon={plusIcon} minusIcon={minusIcon} />
      </div>
    </StyledContainer>
  );
};

export default Reply;
