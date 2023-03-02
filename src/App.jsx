import React, { useState, useRef } from "react";
import { GlobalStyles } from "./components/shared/Global";
import { images } from "./constants/images";
import CommentInput from "./components/comment-input/CommentInput";
import CommentBoard from "./components/comment-board/CommentBoard";
import DeleteModal from "./components/delete-modal/DeleteModal";
import data from "./data.json";

function App() {
  const [commentData, setCommentData] = useState({
    ...data,
    selectedComment: null,
    edit: false,
    modalOpen: false,
  });

  const inputRef = useRef();

  return (
    <>
      <GlobalStyles />
      {commentData.modalOpen ? (
        <div className="backdrop">
          <DeleteModal
            commentArr={commentData.comments}
            selectedComment={commentData.selectedComment}
            setCommentData={setCommentData}
          />
        </div>
      ) : null}

      <div className="app flex-col">
        <CommentBoard
          images={images}
          inputRef={inputRef}
          setCommentData={setCommentData}
          commentArr={commentData.comments}
          currentUser={commentData.currentUser.username}
          selectedComment={commentData.selectedComment}
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
