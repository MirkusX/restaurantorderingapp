import styled from "styled-components";
import burger from "../Images/burger.avif";

export const StyledSection = styled.section`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  flex-direction: column;
  @media (max-width: 811px) {
    width: 100%;
  }
`;

export const StyledImageDiv = styled.div`
  background-image: url(${burger});
  height: 10em;
  background-size: cover;
  background-position: 50%;
  color: white;
  margin-bottom: 4.1875em;
  width: 40%;
  @media (max-width: 811px) {
    width: 100%;
  }
`;

export const StyledItemDiv = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 2.8125em;
  border-bottom: #d2d2d2 solid 1px;
  ${(props) => {
    if (props.remove)
      return `
    margin: 0;
    border: none;
    gap: 0.046875em;
    align-items: center;`;
  }}
`;

export const StyledInnerItemDiv = styled.div`
  width: 100%;
  text-align: left;
`;

export const EmojiH2 = styled.h2`
  font-size: 4.375rem;
  margin: 0;
  line-height: 1;
`;

export const StyledButton = styled.button`
  border-radius: 50%;
  width: 3.125em;
  height: 3.125em;
  border: 1.5px solid #3c3c3c;
  background-color: #dedede;
  flex-shrink: 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const StyledOrderDiv = styled.div`
  display: none;
  ${(props) => {
    if (props.open)
      return `
  display: block;
  bottom: 0;
  width: 40%;
  background: white;
  @media (max-width: 811px) {
    width: 90%;
  }`;
  }}
`;

export const GreenDiv = styled.div`
  background-color: #ecfdf5;
  padding: 1em;
  margin-bottom: 1em;
  color: #065f46;
`;

export const GreenP = styled.p`
  font-size: 2rem;
`;

export const StyledH3 = styled.h3`
  margin: 0;
  ${(props) => {
    if (props.price) {
      return `
      margin-bottom: 2.8311965811965814em;`;
    }
  }}
  ${(props) => {
    if (props.remove) {
      return `
      color: #BBBBBB;
      font-size: 0.75rem;
      cursor: pointer;
      `;
    }
  }}
`;

export const PaymentBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  top: 0;
  position: fixed;
  display: none;
  ${(props) => {
    if (props.display)
      return `
  display: block flex;
  justify-content: center;
  align-items: center;`;
  }}
`;

export const PaymentWindow = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
`;

export const StyledCompleteButton = styled.button`
  background-color: #16db99;
  border: none;
  width: 100%;
  color: white;
  padding: 1.875em;
  border-radius: 3px;
  font-weight: 700;
  margin-bottom: 2.8311965811965814em;
  cursor: pointer;
`;

export const StyledOrderItem = styled.div`
  text-align: left;
  display: flex;
  justify-content: space-between;
  ${(props) => {
    if (props.price)
      return `
    border-top: #393333 2px solid;`;
  }}
`;

export const StyledH2 = styled.h2`
  font-size: 1.75em;
  margin: 0;
  ${(props) => {
    if (props.price)
      return `
    font-size: 1.25rem;
    margin-bottom: 3.1875em;`;
  }}
`;

export const StyledP = styled.p`
  margin: 0 0 0.5em 0;
`;
