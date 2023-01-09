import {
  EmojiH2,
  StyledButton,
  StyledImageDiv,
  StyledInnerItemDiv,
  StyledItemDiv,
  StyledSection,
} from "../Components/StyledComponents";
import { menuArray } from "./FrontpageFiles/FrontpageConts";

export const Frontpage = () => {
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
                <h2>{item.name}</h2>
                <p>{item.ingredients}</p>
                <h2>£{item.price}</h2>
              </StyledInnerItemDiv>
              <StyledButton>+</StyledButton>
            </StyledItemDiv>
          );
        })}
      </div>
    </StyledSection>
  );
};
