import styled, { css } from "styled-components";
import { formatCurrency } from "../utils/helpers";

const StyledPrice = styled.div`
  padding: 1rem 0;
  border-bottom: 1px solid #bbbfbf;
`;

const Row = styled.div`
  display: flex;
  align-items: flex-start;
`;

const Discount = styled.span`
  color: #cc0c39;
  font-size: 2.4rem;
  margin-right: 8px;
  line-height: 1;
`;

const DiscountPrice = styled.span`
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 1;
`;
const MRP = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
  margin-right: 5px;
`;

const RegularPrice = styled.span`
  font-size: 1.2rem;
  text-decoration: line-through;
`;
const AvailableBox = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
`;

const Stock = styled.span`
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 1;

  ${(props) =>
    props.available === "in-stock" &&
    css`
      color: #007600;
    `}

  ${(props) =>
    props.available === "out-of-stock" &&
    css`
      color: #cc0c39;
    `}
  ${(props) =>
    props.available === "limited-stock" &&
    css`
      color: #ffba00;
    `}
`;

function Price({ discount, regularPrice, quantity, discountedPrice }) {
  return (
    <StyledPrice>
      <Row>
        {discount > 0 ? <Discount>-{discount}%</Discount> : null}
        <DiscountPrice>{formatCurrency(discountedPrice)} </DiscountPrice>
      </Row>
      {discount > 0 ? (
        <Row>
          <MRP>M.R.P.:</MRP>
          <RegularPrice>{formatCurrency(regularPrice)}</RegularPrice>
        </Row>
      ) : null}

      <Row>
        <AvailableBox>
          Available:{" "}
          {quantity > 5 ? (
            <Stock available="in-stock">In Stock</Stock>
          ) : quantity <= 5 && quantity > 0 ? (
            <Stock available="limited-stock">
              Only {quantity} left in stock.
            </Stock>
          ) : (
            <Stock available="out-of-stock">Out of Stock</Stock>
          )}
        </AvailableBox>
      </Row>
    </StyledPrice>
  );
}

export default Price;
