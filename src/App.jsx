import React, { useState, useEffect } from "react";
import { GlobalStyles } from "./components/shared/Global";
import { images } from "./constants/images";
import Comment from "./components/comment/Comment";
import CommentInput from "./components/comment-input/CommentInput";
import data from "./data.json";
import CommentBoard from "./components/comment-board/CommentBoard";

function App() {
  const [commentData, setCommentData] = useState(data);

  return (
    <>
      <GlobalStyles />
      <div className="app flex-col">
        <CommentBoard
          setCommentData={setCommentData}
          commentArr={commentData.comments}
          currentUser={commentData.currentUser.username}
          images={images}
        />
        <CommentInput
          tstImg={data.currentUser.image.webp}
          setCommentData={setCommentData}
          commentData={commentData}
        />
      </div>
    </>
  );
}

export default App;
