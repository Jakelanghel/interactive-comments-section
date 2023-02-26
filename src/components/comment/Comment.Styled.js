import styled from "styled-components";

export const StyledComment = styled.div`
  width: 100%;
  .comment {
    width: 100%;
    min-width: 100%;
  }

  .comment,
  .reply {
    background-color: var(--white);
  }

  .comment,
  .reply {
    display: flex;
    flex-direction: column;
    padding: 1.25rem;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  }

  .reply {
    width: 95%;
    margin-left: auto;
  }

  .header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .avatar-img {
    width: 40px;
    height: 40px;
  }

  .user-name,
  .date {
    font-size: 1rem;
  }

  .user-name {
    font-weight: 500;
    color: var(--very-dark-blue);
  }

  .usr-tag {
    font-size: 0.85rem;
    font-weight: 500;
    color: var(--white);
    background-color: var(--blue);
    padding: 5px 7px;
    padding-top: 2px;
    border-radius: 3px;
  }

  .date,
  .body {
    color: var(--grayish-blue);
  }

  .date {
    font-weight: 400;
  }

  .reply-tag {
    font-weight: 500;
    color: var(--blue);
    margin-right: 5px;
  }

  .body {
    line-height: 1.5rem;
    margin-bottom: 1.25rem;
  }

  .container-actions {
    display: flex;
    justify-content: space-between;
  }

  .container-usr-actions {
    display: flex;
    gap: 5px;
  }

  .reply-btn,
  .delete-btn,
  .edit-btn {
    font-size: 1rem;
    font-weight: 500;
    text-transform: capitalize;
    background-color: transparent;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    padding: 8px;

    img {
      width: 15px;
      height: 15px;
    }
  }

  .reply-btn,
  .edit-btn {
    color: var(--blue);
  }

  .reply-btn {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .reply-img {
    width: 15px;
    height: 15px;
  }

  .delete-btn {
    color: var(--soft-red);
  }
`;
