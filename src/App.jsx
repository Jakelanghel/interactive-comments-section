import React from "react";
import Comment from "./components/comment/Comment";
import data from "./data.json";
import { GlobalStyles } from "./components/shared/Global";

const commentElements = data.comments.map((comment) => {
  return (
    <Comment
      key={comment.id}
      img={comment.user.image.webp}
      userName={comment.user.username}
      date={comment.createdAt}
      body={comment.content}
      score={comment.score}
      replies={comment.replies}
    />
  );
});

function App() {
  return (
    <div className="app">
      <GlobalStyles />
      {commentElements}
    </div>
  );
}

export default App;
