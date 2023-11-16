import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import styled from "styled-components";

import Logo from "./Logo";
import Modal from "./Modal";
import MobileNavbarContent from "./MobileNavbarContent";

import { useCart } from "../context/CartContext";
import ShoppingCart from "../features/cart/ShoppingCart";

const StyledMobileNavbar = styled.section`
  background-color: var(--color-brand-tertiary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 5rem;
  font-size: 3.2rem;
  display: none;

  & > button {
    background: none;
    border: none;
  }

  @media (max-width: 960px) {
    display: flex;
  }
  @media (max-width: 720px) {
    padding: 2rem 3.2rem;
    font-size: 2.4rem;
  }
  @media (max-width: 450px) {
  }
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

function MobileNavbar() {
  const { cart } = useCart();

  return (
    <StyledMobileNavbar>
      <Modal>
        <Modal.Open opens="mobile-nav">
          <button>
            <GiHamburgerMenu />
          </button>
        </Modal.Open>
        <Modal.Window name="mobile-nav" type="mobile-nav">
          <MobileNavbarContent />
        </Modal.Window>
      </Modal>
      <Logo fontSize="3.6rem" textSize="1.4rem" />

      {/* CART */}
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
    </StyledMobileNavbar>
  );
}

export default MobileNavbar;
