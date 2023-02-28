import React from "react";

const Body = (props) => {
  const { replyId, replyingTo, content } = props;
  return (
    <div className="container-body">
      <p className="body">
        {replyId && <span className="reply-tag">@{replyingTo}</span>}
        {content}
      </p>
    </div>
  );
};

export default Body;
