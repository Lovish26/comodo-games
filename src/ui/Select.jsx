import styled from "styled-components";

import { FaChevronDown } from "react-icons/fa6";

const StyledSelect = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  background: var(--background-linear-gradient-primary);
  background-size: 200% auto;
  color: #222;
  box-shadow: var(--box-shadow);
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: 1px;
  padding: 0 4.8rem 0 2.4rem;
  line-height: 4rem;

  transition: all 0.3s;
`;

const Row = styled.div`
  position: relative;
`;

function Select({ options, onChange, value }) {
  return (
    <Row>
      <FaChevronDown
        style={{
          position: "absolute",
          top: "50%",
          right: "1rem",
          transform: "translateY(-50%)",
          height: "1.2rem",
          width: "1.2rem",
          color: "#222",
          pointerEvents: "none",
        }}
      />
      <StyledSelect value={value} onChange={onChange}>
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
    </Row>
  );
}

export default Select;
