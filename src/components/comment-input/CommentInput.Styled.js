import styled from "styled-components";

export const StyledCommentInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  background-color: var(--white);
  padding: 1.25rem;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;

  textarea {
    width: 100%;
    height: 100px;
    padding: 0.75rem 1rem;
    border-radius: 10px;
    border: none;
    border: solid 1px var(--light-gray);
    resize: none;
  }

  img {
    width: 40px;
    height: 40px;
  }

  .container-input-btn {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  button {
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--white);
    background-color: var(--blue);
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
  }
  button:hover {
    cursor: pointer;
  }
`;
