import styled from "styled-components";
import burger from "../Images/burger.avif";

export const StyledSection = styled.section`
  width: 50%;
  display: flex;
  justify-content: center;
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
`;

export const StyledItemDiv = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 2.8125em;
  border-bottom: #d2d2d2 solid 1px;
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
  font-size: 2rem;
  font-weight: 200;
  border-radius: 50%;
  width: 1.5625em;
  height: 1.5625em;
  border: 1.5px solid #3c3c3c;
  background-color: #dedede;
  flex-shrink: 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

export const StyledOrderDiv = styled.div`
  display: none;
  ${(props) => {
    if (props.open)
      return `
  display: block;`;
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
