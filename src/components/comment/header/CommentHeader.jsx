import React from "react";

const CommentHeader = (props) => {
  const { userName, userImg, isCurrUsr, createdAt } = props;
  return (
    <div className="header">
      <div className="header">
        <img src={userImg} alt="" className="avatar-img" />
        <p className="user-name">{userName}</p>
        {isCurrUsr ? <p className="usr-tag">you</p> : null}
        <p className="date">{createdAt}</p>
      </div>
    </div>
  );
};

export default CommentHeader;
