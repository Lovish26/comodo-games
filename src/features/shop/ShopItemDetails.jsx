import styled from "styled-components";
import toast from "react-hot-toast";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useProduct } from "./useProduct";
import { useCart } from "../../context/CartContext";

import StarRating from "../../ui/StarRating";
import Price from "../../ui/Price";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";
import Spinner from "../../ui/Spinner";
import FullPage from "../../ui/FullPage";

const StyledShopItemDetails = styled.section`
  padding: 10rem 0 0 0;
`;

const Container = styled.div`
  max-width: 114rem;
  margin: 0 auto;
  padding: 12rem 1.5rem;

  @media (max-width: 1200px) {
    max-width: 72rem;
  }
  @media (max-width: 720px) {
    max-width: 42rem;
  }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4.8rem;
  align-items: center;
  margin-top: 2rem;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

const Img = styled.img`
  width: 100%;
`;

const ShopContent = styled.div`
  padding: 4.8rem 0;

  @media (max-width: 720px) {
    padding: 3.2rem 0;
  }
`;

const Heading = styled.h1`
  font-size: 2.4rem;
  font-weight: 600;
`;

const PlatformBox = styled.h6`
  font-size: 1.4rem;
  font-weight: 600;
`;
const Platform = styled.span`
  font-weight: 500;
`;

const ProductDetailsBox = styled.div`
  padding: 1rem 0;
  border-bottom: 1px solid #bbbfbf;
`;

const ProductHeading = styled.h2`
  font-size: 1.6rem;
  font-weight: 600;
`;

const ProductDetail = styled.p`
  font-size: 1.4rem;
`;

const AddToCart = styled.div`
  padding: 2.4rem 0;
`;
const BoldToastText = styled.span`
  font-weight: 600;
`;

function ShopItemDetails() {
  const { product, isLoading } = useProduct();
  const { count, cart, setCart } = useCart();
  const moveBack = useMoveBack();

  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  if (!product) return <FullPage>No product could be found</FullPage>;

  const {
    name,
    image,
    platform,
    rating,
    reviews,
    regularPrice,
    discountedPrice,
    quantity,
    discount,
    description,
    slug,
  } = product;

  const isAlreadyInCart = cart.find((item) => item.slug === slug);

  function handleAddToCart() {
    if (!isAlreadyInCart) {
      setCart((item) => [
        {
          name,
          image,
          platform,
          discountedPrice,
          slug: product.slug,
          productQuantity: quantity,
          quantity: count,
        },
        ...item,
      ]);

      toast.success(
        <div>
          <BoldToastText>{name}</BoldToastText> added to cart successfully!
        </div>
      );
    } else {
      toast.success(
        <div>
          <BoldToastText>{name}</BoldToastText> is already in the cart. Please
          check your cart :)
        </div>,
        {
          style: {
            border: "1px solid var(--color-brand-tertiary)",
            padding: "16px",
            color: "var(--color-brand-tertiary)",
          },
          iconTheme: {
            primary: "var(--color-brand-tertiary)",
            secondary: "#f3f0ff",
          },
        }
      );
    }

    moveBack();
  }

  return (
    <StyledShopItemDetails>
      <Container>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
        <Row>
          <Img src={image} alt={name} />
          <ShopContent>
            <Heading>{name}</Heading>
            <PlatformBox>
              Platform : <Platform>{platform}</Platform>
            </PlatformBox>
            <StarRating rating={rating} reviews={reviews} />
            <Price
              regularPrice={regularPrice}
              discountedPrice={discountedPrice}
              quantity={quantity}
              discount={discount}
            />
            <ProductDetailsBox>
              <ProductHeading>About this item</ProductHeading>
              <ProductDetail>{description}</ProductDetail>
            </ProductDetailsBox>

            <AddToCart>
              {quantity > 0 ? (
                <>
                  <Button onClick={handleAddToCart} type="rounded-0">
                    Add to cart
                  </Button>
                </>
              ) : (
                "Currently unavailable"
              )}
            </AddToCart>
          </ShopContent>
        </Row>
      </Container>
    </StyledShopItemDetails>
  );
}

export default ShopItemDetails;
