import { NavLink } from "react-router-dom";
import styled from "styled-components";
import SearchBar from "./SearchBar";

const StyledHeaderMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 3.2rem;
`;

const StyledLink = styled(NavLink)`
  font-size: 1.4rem;
  font-weight: 600;
  text-transform: uppercase;
  color: white;
  transition: color 0.3s;

  &:hover,
  &:active {
    color: var(--color-brand-primary);
  }

  &.active {
    color: var(--color-brand-primary);
  }
`;

function HeaderMenu() {
  return (
    <StyledHeaderMenu>
      <li>
        <SearchBar searchField="search" />
      </li>
      <li>
        <StyledLink to="home">Home</StyledLink>
      </li>
      <li>
        <StyledLink to="shop">Shop</StyledLink>
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
