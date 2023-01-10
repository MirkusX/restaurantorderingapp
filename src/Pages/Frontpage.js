import { useEffect, useState } from "react";
import {
  EmojiH2,
  StyledButton,
  StyledCompleteButton,
  StyledH2,
  StyledH3,
  StyledImageDiv,
  StyledInnerItemDiv,
  StyledItemDiv,
  StyledOrderDiv,
  StyledOrderItem,
  StyledP,
  StyledSection,
} from "../Components/StyledComponents";
import { menuArray } from "./FrontpageFiles/FrontpageConts";

export const Frontpage = () => {
  const [display, setDisplay] = useState(false);
  const [cart, setCart] = useState([]);
  const sum = Object.values(cart).reduce((a, b) => a + b.price, 0);

  const addToCart = (name, price) => {
    setCart([...cart, { name: name, price: price }]);
    setDisplay(true);
  };

  const removeCart = (index) => {
    const removeList = [...cart];
    removeList.splice(index, 1);
    setCart(removeList);
  };
  useEffect(() => {
    if (cart.length == 0) {
      setDisplay(false);
    }
  }, [cart]);
  return (
    <StyledSection>
      <StyledImageDiv>
        <h1>Jimmy's Diner</h1>
        <p>Best burgers and pizzas in town</p>
      </StyledImageDiv>
      <div>
        {menuArray.map((item, index) => {
          return (
            <StyledItemDiv id={item.id} key={index}>
              <EmojiH2>{item.emoji}</EmojiH2>
              <StyledInnerItemDiv>
                <StyledH2>{item.name}</StyledH2>
                <StyledP>{item.ingredients}</StyledP>
                <StyledH2 price>£{item.price}</StyledH2>
              </StyledInnerItemDiv>
              <StyledButton onClick={() => addToCart(item.name, item.price)}>
                +
              </StyledButton>
            </StyledItemDiv>
          );
        })}
      </div>
      <StyledOrderDiv open={display}>
        <h3>Your Order</h3>
        {cart.map((item, index) => {
          return (
            <StyledOrderItem key={index}>
              <StyledItemDiv remove>
                <StyledH3>{item.name}</StyledH3>
                <StyledH3 remove onClick={() => removeCart(index)}>
                  Remove
                </StyledH3>
              </StyledItemDiv>
              <StyledH3>£{item.price}</StyledH3>
            </StyledOrderItem>
          );
        })}
        <StyledOrderItem price>
          <StyledH3 price>Total Price:</StyledH3>
          <StyledH3 price>£{sum}</StyledH3>
        </StyledOrderItem>
        <StyledCompleteButton>Complete Order</StyledCompleteButton>
      </StyledOrderDiv>
    </StyledSection>
  );
};
