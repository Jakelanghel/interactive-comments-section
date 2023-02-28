import React, { useState, useRef } from "react";

import data from "./data.json";

import { GlobalStyles } from "./components/shared/Global";
import { images } from "./constants/images";
import CommentInput from "./components/comment-input/CommentInput";
import CommentBoard from "./components/comment-board/CommentBoard";

function App() {
  const [commentData, setCommentData] = useState({
    ...data,
    selectedComment: null,
  });

  const inputRef = useRef();

  return (
    <>
      <GlobalStyles />
      <div className="app flex-col">
        <CommentBoard
          images={images}
          inputRef={inputRef}
          setCommentData={setCommentData}
          commentArr={commentData.comments}
          currentUser={commentData.currentUser.username}
        />
        <CommentInput
          userImg={data.currentUser.image.webp}
          setCommentData={setCommentData}
          commentData={commentData}
          inputRef={inputRef}
          currentUser={commentData.currentUser}
          commentArr={commentData.comments}
          selectedComment={commentData.selectedComment}
        />
      </div>
    </>
  );
}

export default App;
