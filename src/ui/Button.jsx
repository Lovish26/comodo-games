import styled, { css } from "styled-components";

const Button = styled.button`
  background: var(--background-linear-gradient-primary);
  background-size: 200% auto;
  color: #222;
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: 1px;
  padding: 0 3.5rem;
  line-height: 4rem;

  transition: all 0.4s;
  box-shadow: var(--box-shadow);
  border: none;

  ${(props) =>
    props.type === "rounded-0" &&
    css`
      border-radius: 0;
    `}
  ${(props) =>
    props.type === "rounded-sm" &&
    css`
      border-radius: 0.5rem;
    `}
  ${(props) =>
    props.type === "rounded-md" &&
    css`
      border-radius: 1rem;
    `}
  
  ${(props) =>
    props.type === "rounded-full" &&
    css`
      border-radius: 5rem;
    `}

   

 
  &:hover {
    background-position: right center;
    color: #22195e;
  }
`;

export default Button;
