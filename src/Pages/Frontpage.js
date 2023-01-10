import { useState } from "react";
import {
  EmojiH2,
  PriceH2,
  StyledButton,
  StyledH2,
  StyledImageDiv,
  StyledInnerItemDiv,
  StyledItemDiv,
  StyledOrderDiv,
  StyledP,
  StyledSection,
  StyledSpan,
} from "../Components/StyledComponents";
import { menuArray } from "./FrontpageFiles/FrontpageConts";

export const Frontpage = () => {
  const [display, setDisplay] = useState(false);
  const [cart, setCart] = useState([]);
  // let cart = [];

  const addToCart = (name, price, emoji) => {
    // cart.push({ name, price, emoji });
    setCart([...cart, { name: name, price: price, emoji: emoji }]);
    setDisplay(true);
    console.log(display);
  };
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
              <StyledButton
                onClick={() => addToCart(item.name, item.price, item.emoji)}
              >
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
            <div key={index}>
              <h3>{item.name}</h3>
            </div>
          );
        })}
      </StyledOrderDiv>
    </StyledSection>
  );
};
