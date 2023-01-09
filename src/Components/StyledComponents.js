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
`;

export const StyledItemDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledInnerItemDiv = styled.div`
  width: 100%;
`;

export const EmojiH2 = styled.h2`
  font-size: 4.92em;
`;

export const StyledButton = styled.button`
  font-size: 2em;
  border-radius: 50%;
`;
