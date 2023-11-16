import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";
import styled from "styled-components";

import Button from "../../ui/Button";
import QuantityButton from "../../ui/QuantityButton";
import CheckoutForm from "./CheckoutForm";

import { formatCurrency } from "../../utils/helpers";
import { useCart } from "../../context/CartContext";
import { useUser } from "../authentication/useUser";

const StyledCartTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Heading = styled.h2`
  text-align: center;
  font-weight: 600;
  border-bottom: 1px solid #ced4da;
  padding-bottom: 1rem;
`;

const Row = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 0.75fr 1.25fr;
  gap: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ced4da;
`;

const ItemImage = styled.img`
  max-height: 15rem;
`;

const ItemName = styled.h3`
  font-size: 1.8rem;
  color: #222;
  font-weight: 500;
  line-height: normal;
`;

const ItemPlatformBox = styled.div`
  font-size: 1.4rem;
`;

const ItemPrice = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
`;

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  margin-left: 2rem;

  transition: color 0.3s;

  &:hover {
    color: red;
  }
`;

const SubtotalBox = styled.div`
  display: flex;
  justify-content: flex-end;
  font-weight: 500;
`;

const SubtotalPrice = styled.p`
  font-weight: 700;
  padding-left: 1rem;
`;

const EmptyCart = styled.span`
  text-align: center;
`;

const StyledLink = styled(Link)`
  color: blue;
  border-bottom: 1px solid blue;
`;

const BoldToastText = styled.span`
  font-weight: 600;
`;

function CartTable({ onCloseModal }) {
  const { cart, setCart } = useCart();
  const { user, isAuthenticated } = useUser();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const totalPrice = cart.reduce((total, item) => {
    const subtotal = item.quantity * item.discountedPrice;

    return total + subtotal;
  }, 0);

  const totalQuantity = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  function handleRemoveCartItem(itemName) {
    setCart((prevCart) => prevCart.filter((item) => item.name !== itemName));
    toast(
      <div>
        <BoldToastText>{itemName}</BoldToastText> removed from the cart
        successfully!
      </div>,
      {
        icon: <FaTrash />,
        style: {
          border: "1px solid #f03e3e",
          padding: "16px",
          color: "#f03e3e",
        },
      }
    );
  }

  return (
    <StyledCartTable>
      <Heading>Shopping Cart</Heading>
      {cart.length > 0 ? (
        <>
          {cart.map((item) => (
            <Row key={item.slug}>
              <ItemImage src={item.image} alt={item.name} />
              <div>
                <ItemName>{item.name}</ItemName>
                <ItemPlatformBox>
                  Platform: <span>{item.platform}</span>
                </ItemPlatformBox>
                <ItemPrice>{formatCurrency(item.discountedPrice)}</ItemPrice>

                <ButtonBox>
                  <QuantityButton
                    productQuantity={item.productQuantity}
                    slug={item.slug}
                    quantity={item.quantity}
                  />

                  <DeleteButton onClick={() => handleRemoveCartItem(item.name)}>
                    Delete
                  </DeleteButton>
                </ButtonBox>
              </div>
            </Row>
          ))}

          <SubtotalBox>
            Subtotal ({totalQuantity} items):
            <SubtotalPrice>{formatCurrency(totalPrice)}</SubtotalPrice>
          </SubtotalBox>

          {!isAuthenticated ? (
            <Button onClick={() => navigate("/login")}>Checkout</Button>
          ) : !isOpen ? (
            <Button onClick={() => setIsOpen(true)}>Checkout</Button>
          ) : (
            <CheckoutForm
              totalPrice={totalPrice}
              user={user}
              cart={cart}
              setCart={setCart}
              onCloseModal={onCloseModal}
            />
          )}
        </>
      ) : (
        <EmptyCart>
          Your cart is empty! Start{" "}
          <StyledLink to="/shop" onClick={onCloseModal}>
            shopping :)
          </StyledLink>
        </EmptyCart>
      )}
    </StyledCartTable>
  );
}

export default CartTable;
