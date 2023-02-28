import React from "react";
import { StyledComment } from "./Comment.Styled";
import CommentHeader from "./header/CommentHeader";
import Body from "./body/Body";
import CommentActions from "./actions/CommentActions";

const Comment = (props) => {
  const {
    data,
    icons,
    inputRef,
    className,
    userImg,
    userName,
    currentUser,
    commentArr,
    setCommentData,
    commentId,
    replyId,
  } = props;

  const isCurrUsr = currentUser === userName ? true : false;

  return (
    <StyledComment>
      <div className={className}>
        <CommentHeader
          userName={userName}
          userImg={userImg}
          isCurrUsr={isCurrUsr}
          replyingTo={data.content}
          createdAt={data.createdAt}
          replyId={replyId}
        />

        <Body
          replyId={replyId}
          replyingTo={data.replyingTo}
          content={data.content}
        />

        <CommentActions
          isCurrUsr={isCurrUsr}
          replyId={replyId}
          data={data}
          icons={icons}
          commentArr={commentArr}
          setCommentData={setCommentData}
          inputRef={inputRef}
          userName={userName}
          commentId={commentId}
        />
      </div>
    </StyledComment>
  );
};

export default Comment;
