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
    replyIcon,
  } = props;
  const isCurrUsr = currentUser === userName ? true : false;

  return (
    <StyledContainer>
      <div className="reply">
        <div className="header">
          <img src={img} alt="" />
          <p className="user-name">{userName}</p>
          {isCurrUsr ? <p className="usr-tag">you</p> : null}
          <p className="date">{date}</p>
        </div>

        <div className="container-body">
          <p className="body">
            <span className="reply-tag">@{userName}</span>
            {body}
          </p>
        </div>

        {isCurrUsr ? (
          <div className="container-actions">
            <VoteActions
              score={score}
              plusIcon={plusIcon}
              minusIcon={minusIcon}
            />

            <div className="container-usr-actions">
              <button className="delete-btn">
                <img src={deleteIcon} alt="" /> delete
              </button>
              <button className="edit-btn">
                <img src={editIcon} alt="" /> edit
              </button>
            </div>
          </div>
        ) : (
          <div className="container-actions">
            <VoteActions
              score={score}
              plusIcon={plusIcon}
              minusIcon={minusIcon}
            />

            <button className="reply-btn">
              <img src={replyIcon} alt="" className="reply-img" /> reply
            </button>
          </div>
        )}
      </div>
    </StyledContainer>
  );
};

export default Reply;
