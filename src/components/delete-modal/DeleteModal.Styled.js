import styled from "styled-components";

export const StyledDeleteModal = styled.div`
  width: 100%;
  min-height: 100%;
  position: fixed;
  background-color: var(--modal-backdrop);
  display: flex;
  justify-content: center;
  align-items: center;

  .container-modal {
    width: 90%;
    background-color: var(--white);
    padding: 1.5rem;
    border-radius: 10px;
  }

  h2 {
    font-size: 1.45rem;
    font-weight: 500;
    color: var(--dark-blue);
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.5rem;
    color: var(--grayish-blue);
    margin-bottom: 1rem;
  }

  .container-modal-actions {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 15px;
  }

  button {
    width: 100%;
    font-size: 1.12rem;
    text-transform: uppercase;
    color: var(--white);
    padding: 1rem 0;
    font-weight: 500;
    border: none;
    border-radius: 10px;
  }

  button:hover {
    cursor: pointer;
  }

  .cancel {
    background-color: var(--grayish-blue);
  }

  .delete {
    background-color: var(--soft-red);
  }
`;
