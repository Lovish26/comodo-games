import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";

import Button from "../../ui/Button";

const StyledShopItem = styled.div`
  border: 3px solid transparent;
  border-image: linear-gradient(
    90deg,
    var(--color-brand-primary),
    var(--color-brand-secondary)
  );
  border-image-slice: 1;
`;

const Img = styled.img`
  width: 100%;
  height: 30rem;
`;

const GameDetails = styled.div`
  padding: 2rem;
`;

const Name = styled.div`
  color: white;
  font-size: 2.4rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Price = styled.div`
  color: white;
  font-size: 2rem;
  font-weight: 600;
`;

const Discount = styled.div`
  color: var(--color-brand-primary);
  font-size: 2rem;
  font-weight: 600;
  font-style: italic;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const OutOfStock = styled.div`
  font-size: 2rem;
  font-weight: 600;
  margin: 0 auto;

  color: #fa5252;
`;

function ShopItemCard({ product }) {
  const { name, image, discount, slug, quantity, discountedPrice } = product;

  return (
    <StyledShopItem>
      <NavLink to={`/shop/${slug}`}>
        <Img src={image} alt={name} />
        <GameDetails>
          <Name>{name}</Name>
          <Row>
            {quantity > 0 ? (
              <>
                <div>
                  <Price>{formatCurrency(discountedPrice)}</Price>
                  {discount > 0 ? <Discount>{discount}% Off</Discount> : null}
                </div>
                <Button type="rounded-0" style={{ alignSelf: "center" }}>
                  Buy now
                </Button>
              </>
            ) : (
              <OutOfStock>Out of stock</OutOfStock>
            )}
          </Row>
        </GameDetails>
      </NavLink>
    </StyledShopItem>
  );
}

export default ShopItemCard;
