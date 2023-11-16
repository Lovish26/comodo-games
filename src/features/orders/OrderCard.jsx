import styled from "styled-components";
import { BsFillCaretDownFill } from "react-icons/bs";
import { formatCurrency, formatDate } from "../../utils/helpers";

import Modal from "../../ui/Modal";
import ShippingModal from "./ShippingModal";
import { Link, useNavigate } from "react-router-dom";

const StyledOrderCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #d5d9d9;
  border-radius: 8px;
  overflow: hidden;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const OrderHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.75fr 2.25fr 2fr;
  background-color: #f5fbff;
  border-bottom: 1px solid #d5d9d9;
  padding: 1rem 2rem;
  font-size: 1.4rem;

  & > div:last-child {
    text-align: end;
  }

  & > div:not(:last-child) {
    /* background-color: red; */
    margin-right: 1.5rem;
  }
  & > div > div:first-child {
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 400;
  }
  & > div {
    /* text-transform: uppercase; */
    font-weight: 500;
  }

  & > div:nth-child(3) {
    position: relative;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1.5fr 1fr 2fr 1.5fr;
  }
`;

const ShippingButton = styled.button`
  background: none;
  border: none;
  display: flex;
  gap: 2px;
  align-items: center;
  margin-top: 2px;
  color: var(--color-brand-tertiary);

  @media (max-width: 640px) {
    flex-wrap: wrap;
  }
`;

const Main = styled.div`
  padding: 2rem;

  & > div {
    display: flex;
    /* justify-content: space-between; */
    gap: 2rem;

    &:not(:last-child) {
      padding-bottom: 1rem;
      border-bottom: 1px solid #d5d9d9;
    }

    &:not(:nth-child(2)) {
      padding-top: 1rem;
    }

    @media (max-width: 640px) {
      flex-wrap: wrap;
    }
  }
`;

const Status = styled.p`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const Image = styled.img`
  min-width: 12rem;
  height: 12rem;
`;

const ProductDetails = styled.div`
  padding: 0 1.5rem;
  width: 100%;

  @media (max-width: 640px) {
    flex-basis: 50%;
  }
`;

const ProductHeading = styled.h3`
  font-size: 1.8rem;
  font-weight: 500;
  /* line-height: 1; */
  padding-top: 1rem;

  & > a {
    color: var(--color-brand-blue-900);

    &:hover {
      color: #fab005;
      text-decoration: underline;
    }
  }
`;

const Quantity = styled.p`
  font-size: 1.6rem;
  font-weight: 500;

  & > span {
    font-weight: bold;
  }
`;
const Price = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  margin-bottom: 1.5rem;

  & > span {
    font-weight: bold;
  }
`;

const BuyAgainButton = styled.button`
  width: 100%;
  color: #fff;
  background-color: var(--color-brand-tertiary);
  text-transform: uppercase;

  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 1px;
  padding: 0 2.4rem;
  line-height: 3.2rem;
  margin-right: 1.5rem;

  transition: all 0.4s;
  border: 2px solid var(--color-brand-tertiary);
  border-radius: 5px;

  &:hover {
    opacity: 0.8;
  }
`;

const ViewItemButton = styled.button`
  color: #000;
  background: transparent;
  text-transform: uppercase;

  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 1px;
  padding: 0 2.4rem;
  line-height: 3.2rem;

  transition: all 0.4s;
  border: 2px solid var(--color-brand-tertiary);
  border-radius: 5px;

  &:hover {
    background-color: #edf2ff;
  }
`;

const ExtraButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  & > button {
    white-space: nowrap;
  }

  @media (max-width: 640px) {
    flex-direction: row;
  }
`;

function OrderCard({ order }) {
  const {
    id,
    created_at: orderPlacedAt,
    orderStatus,
    deliveryDate,
    customerName,
    orderedItems,
    shippingAddress,
    totalPrice,
  } = order;
  const navigate = useNavigate();

  return (
    <StyledOrderCard>
      <OrderHeader>
        <div>
          <div>Order Placed</div> {formatDate(orderPlacedAt, "dd-MMM-yyyy")}
        </div>
        <div>
          <div>Total</div> {formatCurrency(totalPrice)}
        </div>
        <div>
          <div>Ship to</div>{" "}
          <Modal type="dropdown">
            <Modal.Open opens="dropdown">
              <ShippingButton>
                {customerName} <BsFillCaretDownFill />
              </ShippingButton>
            </Modal.Open>
            <Modal.Window name="dropdown" type="shipping">
              <ShippingModal
                customerName={customerName}
                shippingAddress={shippingAddress}
              />
            </Modal.Window>
          </Modal>
        </div>
        <div>
          <div>ORDER # {id}</div>{" "}
          <a href="#">
            {" "}
            Order details <BsFillCaretDownFill />
          </a>
        </div>
      </OrderHeader>
      <Main>
        {orderStatus === "out-for-delivery" ? (
          <Status>
            Order Placed (Expected delivery by{" "}
            {formatDate(deliveryDate, "dd-MMM-yyyy")})
          </Status>
        ) : (
          <Status>Delivered {formatDate(deliveryDate, "dd-MMM-yyyy")}</Status>
        )}

        {orderedItems.map((item) => (
          <div key={item.slug}>
            <Image src={item.image} alt={item.name} />
            <ProductDetails>
              <ProductHeading>
                <Link to={`/shop/${item.slug}`}>{item.name}</Link>
              </ProductHeading>
              <Quantity>
                Qty: <span>{item.quantity}</span>
              </Quantity>
              <Price>
                Price: <span>{formatCurrency(item.discountedPrice)}</span>
              </Price>
            </ProductDetails>
            <ExtraButtonsContainer>
              <BuyAgainButton>Buy it again</BuyAgainButton>
              <ViewItemButton onClick={() => navigate(`/shop/${item.slug}`)}>
                View item in store
              </ViewItemButton>
            </ExtraButtonsContainer>
          </div>
        ))}
      </Main>
    </StyledOrderCard>
  );
}

export default OrderCard;
