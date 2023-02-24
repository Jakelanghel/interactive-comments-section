import React from "react";
import { GlobalStyles } from "./components/shared/Global";
import { images } from "./constants/images";
import Comment from "./components/comment/Comment";
import CommentInput from "./components/comment-input/CommentInput";
import data from "./data.json";

const commentElements = data.comments.map((comment) => {
  const currentUser = data.currentUser.username;
  return (
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
    />
  );
});

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="app">
        {commentElements}
        <CommentInput tstImg={data.currentUser.image.webp} />
      </div>
    </>
  );
}

export default App;
