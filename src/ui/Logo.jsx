import styled from "styled-components";
import { FaDiceD20 } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const StyledLogo = styled.div`
  color: ${(props) =>
    props.type === "dark" ? "var(--color-brand-tertiary)" : "white"};

  display: flex;
  gap: 1rem;
  font-weight: 600;
  align-items: center;

  & > svg {
    font-size: ${(props) => (props.fontSize ? props.fontSize : "4.8rem")};

    @media (max-width: 960px) {
      font-size: ${(props) => (props.fontSize ? props.fontSize : "3.6rem")};
    }
    @media (max-width: 720px) {
      font-size: ${(props) => (props.fontSize ? props.fontSize : "3.2rem")};
    }
  }
`;

const StyledText = styled.p`
  line-height: 1.2;
  font-size: 1.6rem;
  font-size: ${(props) => (props.textSize ? props.textSize : "1.6rem")};
  letter-spacing: 1px;
  font-weight: 700;

  @media (max-width: 720px) {
    font-size: ${(props) => (props.textSize ? props.textSize : "1.2rem")};
  }
`;

function Logo({ type, fontSize, textSize, onCloseModal }) {
  return (
    <NavLink to="/" onClick={onCloseModal}>
      <StyledLogo type={type}>
        <FaDiceD20 fontSize={fontSize} />
        <StyledText textSize={textSize}>
          COMODO <br /> GAMES
        </StyledText>
      </StyledLogo>
    </NavLink>
  );
}

export default Logo;
