import { NavLink, useNavigate } from "react-router-dom";
import {
  HiOutlineHome,
  HiOutlineShoppingBag,
  HiOutlineUserCircle,
  HiOutlineReceiptRefund,
} from "react-icons/hi2";
import { PiSignOut } from "react-icons/pi";
import { BsFileEarmarkRuled } from "react-icons/bs";
import styled from "styled-components";

import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Button from "./Button";

import { useUser } from "../features/authentication/useUser";
import { useLogout } from "../features/authentication/useLogout";

const NavModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6.8rem;
  height: 100%;
  font-size: 2rem;

  & > a {
    padding: 0 1.5rem;
  }

  & > ul {
    line-height: 2.4;
  }
  & > ul > li > a {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    transition: all 0.3s;
    padding: 0 1.5rem;

    &:hover {
      background-color: var(--color-brand-primary);
      color: white;
    }
  }
`;

const UserText = styled.div`
  font-size: 2.4rem;
  margin-top: auto;
  color: var(--color-brand-tertiary);
  font-weight: 600;
  text-align: center;
  padding: 1rem 0;
  border-top: 2px solid var(--color-brand-tertiary);
  border-bottom: 2px solid var(--color-brand-tertiary);
`;

function MobileNavbarContent({ onCloseModal }) {
  const { user, isAuthenticated } = useUser();
  const navigate = useNavigate();
  const { logout } = useLogout();

  return (
    <NavModalContent>
      <Logo type="dark" onCloseModal={onCloseModal} />
      <ul>
        <li>
          <NavLink to="home" onClick={onCloseModal}>
            <HiOutlineHome /> Home
          </NavLink>
        </li>
        <li>
          <NavLink to="shop" onClick={onCloseModal}>
            <HiOutlineShoppingBag /> Shop
          </NavLink>
        </li>
        <li>
          <NavLink to="my-account" onClick={onCloseModal}>
            <HiOutlineUserCircle /> Your Account
          </NavLink>
        </li>
        <li>
          <NavLink to="my-orders" onClick={onCloseModal}>
            <HiOutlineReceiptRefund /> Your Orders
          </NavLink>
        </li>
        <li>
          <NavLink to="t&c" onClick={onCloseModal}>
            <BsFileEarmarkRuled /> Terms & Conditions
          </NavLink>
        </li>
        <li>
          <NavLink to="" onClick={logout}>
            <PiSignOut /> Sign out
          </NavLink>
        </li>
      </ul>
      <SearchBar searchField="search" onCloseModal={onCloseModal} />

      {!isAuthenticated ? (
        <Button onClick={() => navigate("/login")}>Join us</Button>
      ) : (
        <UserText>
          Hello, {user?.user_metadata?.username?.split(" ")?.at(0)}
        </UserText>
      )}
    </NavModalContent>
  );
}

export default MobileNavbarContent;
