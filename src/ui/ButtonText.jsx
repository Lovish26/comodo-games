import styled, { css } from "styled-components";

const ButtonText = styled.button`
  color: rgb(60, 51, 141);
  font-size: 1.8rem;
  font-weight: 600;
  text-align: center;
  transition: all 0.3s;
  background: none;
  border: none;
  border-radius: 0.2rem;

  ${(props) =>
    props.theme === "dark" &&
    css`
      color: white;

      &:hover,
      &:active {
        opacity: 0.8;
        color: white !important;
      }
    `}

  &:hover,
  &:active {
    color: rgba(60, 51, 141, 0.8);
  }
`;

export default ButtonText;
