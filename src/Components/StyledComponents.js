import styled from "styled-components";
import burger from "../Images/burger.avif";

export const StyledSection = styled.section`
  width: 50%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  flex-direction: column;
`;

export const StyledImageDiv = styled.div`
  background-image: url(${burger});
  height: 10em;
  background-size: cover;
  background-position: 50%;
  color: white;
`;

export const StyledItemDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledInnerItemDiv = styled.div`
  width: 100%;
  text-align: left;
`;

export const EmojiH2 = styled.h2`
  font-size: 4.92em;
`;

export const StyledButton = styled.button`
  font-size: 2em;
  border-radius: 50%;
  width: 3.125em;
  height: 3.125em;
  padding: 0;
  border: 1.5px solid #3c3c3c;
  background-color: #dedede;
  text-align: center;
  flex-shrink: 0;
  /* display: flex;
  align-items: center;
  justify-content: center; */
`;
