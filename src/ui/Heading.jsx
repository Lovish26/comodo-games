import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3.6rem;
      font-weight: 600;
      margin-top: -4rem;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2.4rem;
      font-weight: 500;
      color: white;
      line-height: 4rem;
      padding: 2.5rem 0;
    `}
  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 3rem;
      font-weight: 500;
      color: white;
      line-height: 4rem;
      padding: 2.5rem 0;
    `}
  ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 4.4rem;
      font-weight: bold;
      color: white;
      margin-bottom: 2rem;
      line-height: 1.2;
    `}
  ${(props) =>
    props.as === "h5" &&
    css`
      display: inline-block;
      font-size: 1.4rem;
      color: white;
      margin-bottom: 1.2rem;
      letter-spacing: 2px;
      text-transform: uppercase;
      position: relative;
      font-weight: 600;

      &::after {
        content: "";
        position: absolute;
        height: 1px;
        bottom: -10px;
        left: 0px;
        width: 50px;
        background: linear-gradient(
          to right,
          var(--color-brand-primary) 0%,
          var(--color-brand-secondary) 100%
        );
      }
    `}

    ${(props) =>
    props.as === "h6" &&
    css`
      font-size: 7.2rem;
      color: var(--color-brand-primary);
      opacity: 0.1;
      margin: 0;
      line-height: 6rem;
      font-weight: 600;
    `} /* line-height: 1.2; */

    color: ${(props) => (props.color ? props.color : "white")};

  ${(props) =>
    props.as === "h7" &&
    css`
      color: #222;
      font-size: 3.6rem;
      font-weight: 600;
      margin-top: -4rem;
    `}
`;

export default Heading;
