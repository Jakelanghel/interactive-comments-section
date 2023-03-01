import React from "react";
import Comment from "../comment/Comment";

const CommentBoard = (props) => {
  const {
    images,
    inputRef,
    setCommentData,
    commentArr,
    currentUser,
    selectedComment,
  } = props;

  const commentElements = commentArr.map((comment) => {
    return comment.replies.length === 0 ? (
      <Comment
        key={comment.id}
        data={comment}
        icons={images}
        inputRef={inputRef}
        className="comment"
        userImg={comment.user.image.webp}
        userName={comment.user.username}
        currentUser={currentUser}
        commentArr={commentArr}
        setCommentData={setCommentData}
        commentId={comment.id}
        id={comment.id}
        selectedComment={selectedComment}
      />
    ) : (
      <div key={comment.id} className="flex-col">
        <Comment
          key={comment.id}
          data={comment}
          icons={images}
          inputRef={inputRef}
          className="comment"
          userImg={comment.user.image.webp}
          userName={comment.user.username}
          currentUser={currentUser}
          commentArr={commentArr}
          setCommentData={setCommentData}
          commentId={comment.id}
          id={comment.id}
          selectedComment={selectedComment}
        />

        {
          <div className="flex-col container-replies">
            {comment.replies.map((reply) => (
              <Comment
                key={reply.id}
                data={reply}
                icons={images}
                inputRef={inputRef}
                className="reply"
                userImg={reply.user.image.webp}
                userName={reply.user.username}
                currentUser={currentUser}
                commentArr={commentArr}
                setCommentData={setCommentData}
                commentId={comment.id}
                replyId={reply.id}
                id={reply.id}
                selectedComment={selectedComment}
              />
            ))}
          </div>
        }
      </div>
    );
  });

  return <div className="flex-col">{commentElements}</div>;
};

export default CommentBoard;
