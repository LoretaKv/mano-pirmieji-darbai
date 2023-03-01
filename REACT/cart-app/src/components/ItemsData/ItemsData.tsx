import axios from "axios";
import { useEffect, useState } from "react";
import { TItem } from "../../types";
import { Wrapper } from "../../styles/ItemsData.styled";
import { StyledAddToCart } from "../../styles/Styled.AddToCart";
import { Button } from "style-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useShoppingcart } from "../../context/ShoppingCartContext";

export const ItemsData = () => {
  const [itemsCards, setItemsCards] = useState<TItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingcart();

  const getData = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products`);
      setItemsCards(response.data);
    } catch (error) {
      console.error(error);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 1_000);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Wrapper>
        {isLoading ? (
          <p>Loading....</p>
        ) : (
          <main>
            {itemsCards.map((itemCard) => (
              <div key={itemCard.id} className="product-container">
                <h3>{itemCard.category}</h3>
                <img src={itemCard.image} alt={itemCard.title} />
                <h5>Price: ${itemCard.price}</h5>
                <p>{itemCard.title}</p>
                <StyledAddToCart>
                  <div>
                    {getItemQuantity(itemCard.id) === 0 ? (
                      <Button
                        onClick={() => {
                          increaseCartQuantity(itemCard.id);
                          getItemQuantity(itemCard.id);
                        }}
                      >
                        <FontAwesomeIcon
                          className="icon"
                          icon={faShoppingCart}
                        />
                      </Button>
                    ) : (
                      <div className="add-items">
                        <Button
                          onClick={() => increaseCartQuantity(itemCard.id)}
                        >
                          +
                        </Button>
                        <span>IN CART: {getItemQuantity(itemCard.id)}</span>
                        <Button
                          onClick={() => decreaseCartQuantity(itemCard.id)}
                        >
                          -
                        </Button>
                        <Button
                          className="remove-button"
                          onClick={() => removeFromCart(itemCard.id)}
                        >
                          Remove From Cart
                        </Button>
                      </div>
                    )}
                  </div>
                </StyledAddToCart>
              </div>
            ))}
          </main>
        )}
      </Wrapper>
    </>
  );
};
