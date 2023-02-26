import styled from "styled-components";

export const StyledVoteActions = styled.div`
  display: flex;
  background-color: var(--light-gray);
  display: flex;
  align-items: center;
  border-radius: 8px;

  button {
    border-radius: 7px;
    background-color: transparent;
    padding: 8px 10px;
    border: none;
  }

  button:hover {
    cursor: pointer;
  }

  img {
    width: 13px;
    height: 13px;
    object-fit: contain;
  }

  .score {
    font-size: 1rem;
    font-weight: 500;
    padding: 8px;
    color: var(--blue);
  }
`;
