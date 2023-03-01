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
    id,
    selectedComment,
  } = props;

  const isCurrUsr = currentUser === userName ? true : false;

  console.log(id);

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
          id={id}
          selectedComment={selectedComment}
        />
      </div>
    </StyledComment>
  );
};

export default Comment;
