import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

import FormRowVertical from "../../ui/FormRowVertical";
import Checkbox from "../../ui/Checkbox";
import SpinnerMini from "../../ui/SpinnerMini";

import { useCreateOrder } from "../orders/useCreateOrder";
import { formatCurrency, getDateAfterNumDays } from "../../utils/helpers";
import { useEditProduct } from "../shop/useEditProduct";

const Input = styled.input`
  border: 1px solid #ced4da;
  background-color: #f5fbff;
  border-radius: 5px;
  padding: 0.8rem 1.2rem;
  min-width: 30rem;
`;
const StyledButton = styled.button`
  background: var(--background-linear-gradient-primary);
  background-size: 200% auto;
  color: #222;
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: 1px;
  padding: 0 3.5rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.4s;
  box-shadow: var(--box-shadow);
  border: none;

  &:hover {
    background-position: right center;
    color: #22195e;
  }
`;

function CheckoutForm({ totalPrice, cart, setCart, user, onCloseModal }) {
  const { editProduct, isEditing } = useEditProduct();
  const { createOrder, isCreatingOrder } = useCreateOrder();
  const [confirmPaid, setConfirmPaid] = useState(false);
  const { register, formState, handleSubmit } = useForm();
  const { errors } = formState;

  // Updating the product quantity after checkout
  const updateProductQuantities = () => {
    for (const cartItem of cart) {
      const updatedQty = cartItem.productQuantity - cartItem.quantity;

      editProduct({ updatedQty, slug: cartItem.slug });
    }
  };

  function onSubmit({ address }) {
    createOrder(
      {
        orderedItems: cart,
        totalPrice,
        shippingAddress: address,
        customerName: user.user_metadata.username,
        customerEmail: user.email,
        customerId: user.id,
        deliveryDate: getDateAfterNumDays(3),
      },
      {
        onSuccess: () => {
          updateProductQuantities();
          setCart([]);
        },
        onSettled: () => {
          onCloseModal();
        },
      }
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormRowVertical
        label="Shipping Address"
        error={errors?.address?.message}
      >
        <Input
          type="text"
          id="address"
          placeholder="Enter your address"
          {...register("address", {
            required: "Shipping address is required",
          })}
          disabled={isCreatingOrder || isEditing}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Checkbox
          checked={confirmPaid}
          onChange={() => setConfirmPaid((confirm) => !confirm)}
          disabled={confirmPaid}
          id="confirm"
        >
          Confirm to pay <b>{formatCurrency(totalPrice)}</b> and place order?
        </Checkbox>
      </FormRowVertical>
      <FormRowVertical>
        <StyledButton disabled={!confirmPaid || isCreatingOrder || isEditing}>
          {!isCreatingOrder ? "Place order" : <SpinnerMini />}
        </StyledButton>
      </FormRowVertical>
    </form>
  );
}

export default CheckoutForm;
