import React from "react";
import { StyledContainer } from "./ContainerStyled";
import VoteActions from "./vote-actions/VoteActions";
import Reply from "./reply/Reply";

const Comment = (props) => {
  const { img, userName, date, body, score, replies, currentUser, icons } =
    props;

  const replyElements = replies.map((reply) => {
    return (
      <Reply
        key={reply.id}
        img={reply.user.image.webp}
        userName={reply.user.username}
        date={reply.createdAt}
        body={reply.content}
        score={reply.score}
        currentUser={currentUser}
        deleteIcon={icons.deleteIcon}
        editIcon={icons.editIcon}
        plusIcon={icons.plusIcon}
        minusIcon={icons.minusIcon}
        replyIcon={icons.replyIcon}
      />
    );
  });

  return (
    <StyledContainer>
      <div className="comment">
        <div className="header">
          <img src={img} alt="" />
          <p className="user-name">{userName}</p>
          <p className="date">{date}</p>
        </div>

        <div className="container-body">
          <p className="body">{body}</p>
        </div>

        <div className="container-actions">
          <VoteActions
            score={score}
            plusIcon={icons.plusIcon}
            minusIcon={icons.minusIcon}
          />

          <button className="reply-btn">
            <img src={icons.replyIcon} alt="" className="reply-img" /> reply
          </button>
        </div>
      </div>

      {replyElements.length > 0 ? (
        <div className="container-replies">{replyElements}</div>
      ) : null}
    </StyledContainer>
  );
};

export default Comment;
