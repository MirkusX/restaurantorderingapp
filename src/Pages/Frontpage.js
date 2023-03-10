import { useEffect, useReducer, useState } from "react";
import {
  EmojiH2,
  GreenDiv,
  GreenP,
  PaymentBackground,
  PaymentWindow,
  StyledButton,
  StyledCompleteButton,
  StyledDiv,
  StyledForm,
  StyledH2,
  StyledH3,
  StyledImageDiv,
  StyledInnerItemDiv,
  StyledInput,
  StyledItemDiv,
  StyledOrderDiv,
  StyledOrderItem,
  StyledP,
  StyledSection,
} from "../Components/StyledComponents";
import { initialState, reducer } from "../Components/useReducer";
import { menuArray } from "./FrontpageFiles/FrontpageConts";

export const Frontpage = () => {
  //usestate for name in entered in form
  const [name, setName] = useState("");
  //usestate for cart
  const [cart, setCart] = useState([]);
  //reducer import
  const [state, dispatch] = useReducer(reducer, initialState);
  //sums up cost of items in cart to be displayed in form
  const sum = Object.values(cart).reduce((a, b) => a + b.price, 0);
  //adds item name and item price to cart array and displays cart on bottom of page
  const addToCart = (name, price) => {
    setCart([...cart, { name: name, price: price }]);
    dispatch({ type: "display1", payload: true });
  };
  //hides cart and displays payment form
  const pay = () => {
    dispatch({ type: "display2" });
  };
  //hides payment form and displays complete message, prevents page from refreshing immediately and rather refreshes it after 3 seconds
  const payFinal = (e) => {
    e.preventDefault();
    dispatch({ type: "display2" });
    dispatch({ type: "display3", payload: true });
    const timer = setTimeout(() => {
      window.location.reload();
    }, 3000);
  };
  //removes item from cart
  const removeCart = (index) => {
    const removeList = [...cart];
    removeList.splice(index, 1);
    setCart(removeList);
  };
  //if cart is empty it hides cart
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
      <StyledDiv>
        {/* displays menu items */}
        {menuArray.map((item, index) => {
          return (
            <StyledItemDiv id={item.id} key={index}>
              <EmojiH2>{item.emoji}</EmojiH2>
              <StyledInnerItemDiv>
                <StyledH2>{item.name}</StyledH2>
                <StyledP>{item.ingredients}</StyledP>
                <StyledH2 price>??{item.price}</StyledH2>
              </StyledInnerItemDiv>
              <StyledButton onClick={() => addToCart(item.name, item.price)}>
                +
              </StyledButton>
            </StyledItemDiv>
          );
        })}
      </StyledDiv>

      <StyledOrderDiv open={state.boolean1}>
        <h3>Your Order</h3>
        {/* displays cart items */}
        {cart.map((item, index) => {
          return (
            <StyledOrderItem key={index}>
              <StyledItemDiv remove>
                <StyledH3>{item.name}</StyledH3>
                <StyledH3 remove onClick={() => removeCart(index)}>
                  Remove
                </StyledH3>
              </StyledItemDiv>
              <StyledH3>??{item.price}</StyledH3>
            </StyledOrderItem>
          );
        })}

        <StyledOrderItem price>
          <StyledH3 price>Total Price:</StyledH3>
          <StyledH3 price>??{sum}</StyledH3>
        </StyledOrderItem>
        <StyledCompleteButton onClick={() => pay()}>Pay</StyledCompleteButton>
      </StyledOrderDiv>

      <PaymentBackground display={state.boolean2}>
        <PaymentWindow>
          <h3>Total sum: ??{sum}</h3>
          <h3>Enter card details</h3>
          <StyledForm onSubmit={payFinal}>
            <StyledInput
              required="required"
              type="text"
              name="name"
              placeholder="Enter your name"
              onInput={(e) => setName((name) => (name = e.target.value))}
            />
            <StyledInput
              required="required"
              type="number"
              name="cardNum"
              placeholder="Enter card number"
            />
            <StyledInput
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
