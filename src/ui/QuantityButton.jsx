import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import styled from "styled-components";

import { useCart } from "../context/CartContext";

const StyledQuantityBtn = styled.div`
  max-width: 15rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 2rem;
  border-right: 1px solid #adb5bd;
`;

const StyledInput = styled.input`
  cursor: default !important;
  width: 4rem;
  font-size: 2.4rem;
  font-weight: 500;
  padding-left: 1.2rem;
  text-align: center;
  border: none;
`;

const StyledButton = styled.button`
  font-size: 2rem;
  color: #212529;

  background: transparent;
  border: none;

  &:disabled {
    color: #adb5bd;
  }
`;

function QuantityButton({ productQuantity, slug, quantity }) {
  const { setCart } = useCart();

  function handleQtyDec() {
    setCart((items) =>
      items.map((item) =>
        item.slug === slug
          ? {
              ...item,
              quantity: quantity > 1 ? item.quantity - 1 : quantity,
            }
          : item
      )
    );
  }

  function handleQtyInc() {
    setCart((items) =>
      items.map((item) =>
        item.slug === slug
          ? {
              ...item,
              quantity:
                quantity < productQuantity ? item.quantity + 1 : quantity,
            }
          : item
      )
    );
  }

  function handleChange() {
    handleQtyDec();
    handleQtyInc();
  }

  return (
    <StyledQuantityBtn>
      <StyledButton onClick={handleQtyDec} disabled={quantity === 1}>
        <AiOutlineMinusCircle />
      </StyledButton>
      <StyledInput
        type="number"
        value={quantity}
        disabled
        onChange={handleChange}
      />
      <StyledButton
        onClick={handleQtyInc}
        disabled={quantity === productQuantity}
      >
        <AiOutlinePlusCircle />
      </StyledButton>
    </StyledQuantityBtn>
  );
}

export default QuantityButton;
