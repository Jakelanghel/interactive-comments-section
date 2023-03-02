import React from "react";
import { StyledDeleteModal } from "./DeleteModal.Styled";

const DeleteModal = (props) => {
  const { commentArr, selectedComment, setCommentData } = props;

  const deleteComment = () => {
    // Filter commentsArr returning all comments that don't match selected comment
    let updatedComments = commentArr.filter(
      (comment) => comment.id !== selectedComment
    );
    // Filter each comments replies array returning all replies that don't match selectedComment
    updatedComments = updatedComments.map((comment) => {
      const updatedReplies = comment.replies.filter(
        (reply) => reply.id !== selectedComment
      );
      // Replace replies arr with new filtered arr
      const updatedComment = { ...comment, replies: updatedReplies };
      return updatedComment;
    });

    setCommentData((oldState) => ({
      ...oldState,
      comments: updatedComments,
      modalOpen: false,
    }));
  };

  const cancel = () => {
    setCommentData((oldState) => ({
      ...oldState,
      modalOpen: false,
    }));
  };

  return (
    <StyledDeleteModal>
      <div className="container-modal">
        <h2>Delete comment</h2>
        <p>
          Are you sure you want to delete this comment? this will remove the
          comment and cant be undone.
        </p>

        <div className="container-modal-actions">
          <button className="cancel" onClick={cancel}>
            no, cancel
          </button>
          <button className="delete" onClick={deleteComment}>
            yes, delete
          </button>
        </div>
      </div>
    </StyledDeleteModal>
  );
};

export default DeleteModal;
