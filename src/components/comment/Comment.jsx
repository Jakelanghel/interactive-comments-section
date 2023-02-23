import React from "react";
import { StyledContainer } from "./ContainerStyled";
import VoteActions from "./vote-actions/VoteActions";
import Reply from "./reply/Reply";

const Comment = (props) => {
  const { img, userName, date, body, score, replies } = props;

  const replyElements = replies.map((reply) => {
    return (
      <Reply
        key={reply.id}
        img={reply.user.image.webp}
        userName={reply.user.username}
        date={reply.createdAt}
        body={reply.content}
        score={reply.score}
      />
    );
  });

  return (
    <StyledContainer className="padding">
      <div className="comment">
        {/* <div className="container"> */}
        <div className="header">
          <img src={img} alt="" />
          <p className="user-name">{userName}</p>
          <p className="date">{date}</p>
        </div>

        <button className="reply-btn">reply</button>

        <div className="container-body">
          <p className="body">{body}</p>
        </div>
        <VoteActions score={score} />
        {/* </div> */}
      </div>

      {replyElements.length > 0 ? replyElements : null}
    </StyledContainer>
  );
};

export default Comment;
