import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledFilter = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 720px) {
    flex-wrap: wrap;
  }
`;

const FilterButton = styled.button`
  background-color: transparent;
  border: 2px solid transparent;
  border-image: linear-gradient(
    90deg,
    var(--color-brand-primary),
    var(--color-brand-secondary)
  );
  border-image-slice: 1;
  color: #fff;

  ${(props) =>
    props.active &&
    css`
      background: var(--background-linear-gradient-primary);
      background-size: 200% auto;
      color: #222;
      box-shadow: var(--box-shadow);
    `}

  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: 1px;
  padding: 0 3.5rem;
  line-height: 4rem;

  transition: all 0.3s;

  &:hover:not(:disabled) {
    background: var(--background-linear-gradient-primary);
    background-size: 200% auto;
    color: #222;
  }
`;

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    if (searchParams.get("page")) searchParams.set("page", 1);

    setSearchParams(searchParams);
  }

  return (
    <StyledFilter>
      {options.map((option) => (
        <FilterButton
          key={option.value}
          onClick={() => handleClick(option.value)}
          active={option.value === currentFilter}
          disabled={option.value === currentFilter}
        >
          {option.label}
        </FilterButton>
      ))}
    </StyledFilter>
  );
}

export default Filter;
