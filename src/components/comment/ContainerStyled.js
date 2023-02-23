import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  .comment,
  .reply {
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 1rem;
    border: solid 1px red;
  }

  .reply {
    width: 90%;
    margin-left: auto;
  }

  img {
    width: 45px;
    height: 45px;
  }

  .header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.25rem;
  }

  .body {
    margin-bottom: 1.25rem;
  }

  .container-reply-actions {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
  }
`;
