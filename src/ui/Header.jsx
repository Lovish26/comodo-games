import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { FaSignOutAlt, FaFileAlt } from "react-icons/fa";
import { BiSolidUserAccount, BiSolidShoppingBags } from "react-icons/bi";

import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import Button from "./Button";
import Modal from "./Modal";
import ShoppingCart from "../features/cart/ShoppingCart";
import MobileNavbar from "./MobileNavbar";
import Menus from "./Menus";

import { useCart } from "../context/CartContext";
import { useUser } from "../features/authentication/useUser";
import { useLogout } from "../features/authentication/useLogout";

const StyledHeader = styled.header`
  background-color: rgb(44, 33, 114);
  position: absolute;
  width: 100%;
  top: 0px;
  left: 0px;
  z-index: 99;
`;
const Container = styled.nav`
  max-width: 114rem;
  height: 10rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    display: none;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  position: relative;
`;

const CartCount = styled.span`
  width: 20px;
  height: 20px;
  font-size: 1.2rem;
  font-weight: 700;
  padding: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: -10px;
  right: -5px;

  border-radius: 50px;
  border: 3px solid var(--color-brand-tertiary);

  background: #fff;
  color: var(--color-brand-tertiary);

  transition: background-color 0.3s;

  &:hover,
  &:active {
    background-color: var(--color-brand-primary);
  }
`;

const CartButton = styled.button`
  position: relative;
  background: none;
  border: none;
  font-size: 2.4rem;
  color: white;

  transition: color 0.3s;

  &:hover,
  &:active {
    color: var(--color-brand-primary);

    ${CartCount} {
      background-color: var(--color-brand-primary);
    }
  }
`;

const StyledDropdown = styled.div`
  white-space: nowrap;
  min-width: 12rem;
`;

const Heading = styled.span`
  font-size: 1.8rem;
  font-weight: 600;
  border-bottom: 2px solid rgba(33, 37, 41, 0.522);
  margin: 1rem 2rem 0;
`;
const NavList = styled.ul`
  margin-top: 1rem;
`;

function Header() {
  const { cart } = useCart();
  const { isAuthenticated } = useUser();
  const navigate = useNavigate();
  const { logout } = useLogout();

  return (
    <StyledHeader>
      <Container>
        <Logo />
        <HeaderMenu />
        <Row>
          <Modal>
            <Modal.Open opens="cart">
              <CartButton>
                <HiOutlineShoppingCart />
                <CartCount>{cart ? cart?.length : 0}</CartCount>
              </CartButton>
            </Modal.Open>
            <Modal.Window name="cart">
              <ShoppingCart />
            </Modal.Window>
          </Modal>

          {isAuthenticated ? (
            <Menus>
              <Menus.Menu>
                <Menus.Toggle id="dropdown" />

                <Menus.List id="dropdown">
                  <StyledDropdown>
                    <Heading>Your Account</Heading>
                    <NavList>
                      <li>
                        <Menus.Button
                          icon={<BiSolidUserAccount />}
                          onClick={() => navigate("/my-account")}
                        >
                          Your Account
                        </Menus.Button>
                      </li>
                      <li>
                        <Menus.Button
                          icon={<BiSolidShoppingBags />}
                          onClick={() => navigate("/my-orders")}
                        >
                          Your Orders
                        </Menus.Button>
                      </li>
                      <li>
                        <Menus.Button
                          icon={<FaFileAlt />}
                          onClick={() => navigate("/t&c")}
                        >
                          Terms & Conditions
                        </Menus.Button>
                      </li>
                      <li>
                        <Menus.Button icon={<FaSignOutAlt />} onClick={logout}>
                          Sign out
                        </Menus.Button>
                      </li>
                    </NavList>
                  </StyledDropdown>
                </Menus.List>
              </Menus.Menu>
            </Menus>
          ) : (
            <Button onClick={() => navigate("/login")} type="rounded-full">
              Join us
            </Button>
          )}
        </Row>
      </Container>

      <MobileNavbar />
    </StyledHeader>
  );
}

export default Header;
