import { useEffect, useReducer, useState } from "react";
import {
  EmojiH2,
  GreenDiv,
  GreenP,
  PaymentBackground,
  PaymentWindow,
  StyledButton,
  StyledCompleteButton,
  StyledForm,
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
import { initialState, reducer } from "../Components/useReducer";
import { menuArray } from "./FrontpageFiles/FrontpageConts";

export const Frontpage = () => {
  const [name, setName] = useState("");
  const [cart, setCart] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);

  const sum = Object.values(cart).reduce((a, b) => a + b.price, 0);
  const addToCart = (name, price) => {
    setCart([...cart, { name: name, price: price }]);
    dispatch({ type: "display1", payload: true });
  };
  const pay = () => {
    dispatch({ type: "display2" });
  };

  const payFinal = (e) => {
    e.preventDefault();
    dispatch({ type: "display2" });
    dispatch({ type: "display3", payload: true });
    const timer = setTimeout(() => {
      window.location.reload();
    }, 3000);
  };

  const removeCart = (index) => {
    const removeList = [...cart];
    removeList.splice(index, 1);
    setCart(removeList);
  };

  useEffect(() => {
    if (cart.length == 0) {
      dispatch({ type: "display1", payload: false });
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

      <StyledOrderDiv open={state.boolean1}>
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
        <StyledCompleteButton onClick={() => pay()}>Pay</StyledCompleteButton>
      </StyledOrderDiv>

      <PaymentBackground display={state.boolean2}>
        <PaymentWindow>
          <h3>Total sum: £{sum}</h3>
          <StyledForm onSubmit={payFinal}>
            <label for="name">Name</label>
            <input
              required="required"
              type="text"
              name="name"
              placeholder="Enter your name"
              onInput={(e) => setName((name) => (name = e.target.value))}
            />
            <label for="cardNum">Card Number</label>
            <input
              required="required"
              type="number"
              name="cardNum"
              placeholder="Enter card number"
            />
            <label for="cvv">CVV</label>
            <input
              required="required"
              type="number"
              name="cvv"
              placeholder="Enter CVV"
            />

            <StyledCompleteButton type="submit">
              Complete Order
            </StyledCompleteButton>
          </StyledForm>
        </PaymentWindow>
      </PaymentBackground>
      <StyledOrderDiv open={state.boolean3}>
        <GreenDiv>
          <GreenP>Thanks, {name}. Your order is on it's way!</GreenP>
        </GreenDiv>
      </StyledOrderDiv>
    </StyledSection>
  );
};
