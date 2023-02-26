import React from "react";
import Comment from "../comment/Comment";

const CommentBoard = (props) => {
  const { setCommentData, commentArr, currentUser, images } = props;

  const commentElements = commentArr.map((comment) => {
    return comment.replies.length === 0 ? (
      <Comment
        key={comment.id}
        img={comment.user.image.webp}
        userName={comment.user.username}
        date={comment.createdAt}
        body={comment.content}
        score={comment.score}
        replies={comment.replies}
        currentUser={currentUser}
        icons={images}
        className="comment"
        setCommentData={setCommentData}
        id={comment.id}
        commentArr={commentArr}
      />
    ) : (
      <div key={comment.id} className="flex-col">
        <Comment
          key={comment.id}
          img={comment.user.image.webp}
          userName={comment.user.username}
          date={comment.createdAt}
          body={comment.content}
          score={comment.score}
          replies={comment.replies}
          currentUser={currentUser}
          icons={images}
          className="comment"
          setCommentData={setCommentData}
          id={comment.id}
          commentArr={commentArr}
        />
        {comment.replies.map((reply) => (
          <div className="container-replies" key={reply.id}>
            <Comment
              img={reply.user.image.webp}
              userName={reply.user.username}
              date={reply.createdAt}
              body={reply.content}
              score={reply.score}
              currentUser={currentUser}
              icons={images}
              className="reply"
              setCommentData={setCommentData}
              id={reply.id}
              commentArr={commentArr}
            />
          </div>
        ))}
      </div>
    );
  });

  return <div className="flex-col">{commentElements}</div>;
};

export default CommentBoard;
