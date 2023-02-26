import React from "react";
import { StyledComment } from "./Comment.Styled";
import VoteActions from "./vote-actions/VoteActions";

const Comment = (props) => {
  const {
    img,
    userName,
    date,
    body,
    score,
    currentUser,
    icons,
    className,
    setCommentData,
    id,
  } = props;

  const isCurrUsr = currentUser === userName ? true : false;

  return (
    <StyledComment>
      <div className={className}>
        <div className="header">
          <img src={img} alt="" className="avatar-img" />
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
              plusIcon={icons.plusIcon}
              minusIcon={icons.minusIcon}
              setCommentData={setCommentData}
              id={id}
            />

            <div className="container-usr-actions">
              <button className="delete-btn">
                <img src={icons.deleteIcon} alt="" /> delete
              </button>
              <button className="edit-btn">
                <img src={icons.editIcon} alt="" /> edit
              </button>
            </div>
          </div>
        ) : (
          <div className="container-actions">
            <VoteActions
              score={score}
              plusIcon={icons.plusIcon}
              minusIcon={icons.minusIcon}
              setCommentData={setCommentData}
              id={id}
            />

            <button className="reply-btn">
              <img src={icons.replyIcon} alt="" className="reply-img" /> reply
            </button>
          </div>
        )}
      </div>

      {/* {replyElements.length > 0 ? (
        <div className="container-replies">{replyElements}</div>
      ) : null} */}
    </StyledComment>
  );
};

export default Comment;
