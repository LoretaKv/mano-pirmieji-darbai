import styled from "styled-components";

export const StyledAddToCart = styled.div`
  .add-items {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
  }
  span {
    padding: 5px;
  }

  .remove-button {
    background-color: red;
    align-self: flex-end;
    margin-bottom: 150px;
  }
`;
