import styled from "styled-components";

import { PAGE_SIZE } from "../../utils/constants";

import { useProducts } from "./useProducts";
import ShopOperations from "./ShopOperations";
import ShopItemCard from "./ShopItemCard";

import CarouselSlider from "../../ui/Carousel";
import Pagination from "../../ui/Pagination";
import FullPage from "../../ui/FullPage";
import Spinner from "../../ui/Spinner";
import { useSearchParams } from "react-router-dom";
import { useMoveBack } from "../../hooks/useMoveBack";
import ButtonText from "../../ui/ButtonText";

const StyledShop = styled.section`
  padding: 10rem 0 0 0;

  @media (max-width: 960px) {
    padding: 7.6rem 0 0 0;
  }

  @media (max-width: 720px) {
    padding: 7.3rem 0 0 0;
  }
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

const ShopContent = styled.div`
  background: var(--background-linear-gradient-secondary);
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 4.8rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 3.2rem;
  }
  @media (max-width: 720px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const PaginationBox = styled.div`
  margin-top: 4.8rem;
  padding: 2rem 1.5rem;
  background: var(--background-linear-gradient-primary);
  background-size: 200% auto;
`;

const NoResultFound = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  color: white;
  padding: 4.8rem 0;
`;

function ShopSection() {
  const { products, isLoading, count } = useProducts();
  const [searchParams] = useSearchParams();
  const moveBack = useMoveBack();

  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  return (
    <StyledShop>
      <CarouselSlider />

      {count > 0 ? (
        <ShopContent>
          <Container>
            <ShopOperations />
            <Row>
              {products.map((product) => (
                <ShopItemCard product={product} key={product.id} />
              ))}
            </Row>

            {pageCount <= 1 ? null : (
              <PaginationBox>
                <Pagination count={count} />
              </PaginationBox>
            )}
          </Container>
        </ShopContent>
      ) : (
        <ShopContent>
          <Container>
            <ButtonText theme="dark" onClick={moveBack}>
              &larr; Back
            </ButtonText>
            <NoResultFound>
              No results found for: {searchParams.get("search")}
              <br />
              Try checking your spelling or use more general terms
            </NoResultFound>
          </Container>
        </ShopContent>
      )}
    </StyledShop>
  );
}

export default ShopSection;
