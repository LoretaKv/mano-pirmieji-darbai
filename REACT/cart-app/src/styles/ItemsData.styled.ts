import styled from "styled-components";

export const Wrapper = styled.div`
  .product-container {
    display: grid;
    justify-content: space-between;
    border: 1px solid lightblue;
    border-radius: 20px;
    height: 80%;
    width: 70%;
    padding: 40px;
    margin: 20px;
    margin-right: 40px;
  }

  button {
    border-radius: 20px 20px;
    width: 150px;
    margin: 0px;
    height: 40px;
  }
  img {
    max-height: 250px;
    object-fit: cover;
    border-radius: 20px 20px;
    max-width: 70%;
  }

  div {
    fony-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
  }
  main {
    display: grid;
    grid-template-columns: repeat(3, auto);
    justify-content: space-between;
  }
`;
