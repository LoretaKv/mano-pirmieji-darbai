import { StyledHeader } from "../styles/Header.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome/";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <StyledHeader>
      <h1> YOUR FANCY SHOP</h1>
      <Link to="/cart">
        <h3>2</h3>
        <FontAwesomeIcon className="icon" icon={faShoppingCart} />
      </Link>
    </StyledHeader>
  );
};
