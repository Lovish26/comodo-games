import styled from "styled-components";
import CartTable from "./CartTable";

const StyledShopCart = styled.div``;

function ShoppingCart({ onCloseModal }) {
  return (
    <StyledShopCart>
      <CartTable onCloseModal={onCloseModal} />
    </StyledShopCart>
  );
}

export default ShoppingCart;
