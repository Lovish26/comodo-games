import styled from "styled-components";
import Heading from "./Heading";

import { FaCheck, FaXmark } from "react-icons/fa6";
import Button from "./Button";

const StyledPricing = styled.section`
  padding: 12rem 0;

  @media (max-width: 720px) {
    padding: 0 0 12rem;
  }
`;

const Container = styled.div`
  max-width: 114rem;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (max-width: 1200px) {
    max-width: 72rem;
  }
`;

const HeadingBox = styled.div`
  text-align: center;
  margin-bottom: 8rem;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    /* gap: 4.8rem; */
    row-gap: 3rem;

    & > div:last-child {
      grid-column: -3 / -1;
    }
  }

  @media (max-width: 720px) {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 6.4rem;

    & > div:last-child {
      grid-column: auto;
    }
  }
`;

const CardItem = styled.div`
  margin: 0 1.5rem;
  text-align: center;
  background: var(--background-linear-gradient-secondary);
  padding-bottom: 3rem;
  overflow: hidden;

  @media (max-width: 1200px) {
    width: 32rem;
    margin: 0 auto;
  }
`;

const CardHeading = styled.h6`
  color: white;
  font-size: 1.8rem;
  padding: 3.5rem 0;
`;

const CardPricing = styled.div`
  background-color: #342b7e;
  font-weight: bold;
  color: white;
  padding: 3rem;
  font-size: 3.6rem;
`;

const CardFeatures = styled.ul`
  padding: 3rem 3rem 1.5rem 3rem;
  color: white;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 3.2rem;
  padding: 1.5rem 3.2rem 1.5rem 0;
`;

const CardBadge = styled.div`
  position: relative;
  font-weight: 600;

  &::after {
    content: "Most Popular";
    position: absolute;
    background: var(--background-linear-gradient-primary);
    background-size: 200%;
    color: white;
    padding: 0.2rem;
    width: 60%;
    rotate: 45deg;
    top: 35px;
    right: -45px;
    box-shadow: var(--box-shadow);
  }
`;

function Pricing() {
  return (
    <StyledPricing>
      <Container>
        <HeadingBox>
          <Heading as="h6">Pricing Plans</Heading>
          <Heading as="h1">Pricing Plans</Heading>
        </HeadingBox>

        <Row>
          <CardItem>
            <CardHeading>Silver Package</CardHeading>
            <CardPricing>$19.99/mo</CardPricing>
            <CardFeatures>
              <ListItem>
                Free Game Demos <FaXmark />
              </ListItem>
              <ListItem>
                Monthly Gift cards <FaXmark />
              </ListItem>
              <ListItem>
                Refund & Return <FaCheck />
              </ListItem>
              <ListItem>
                Regular Discounts <FaCheck />
              </ListItem>
              <ListItem>
                Bundle Deals <FaXmark />
              </ListItem>
            </CardFeatures>
            <Button type="rounded-sm">Buy now</Button>
          </CardItem>

          <CardItem>
            <CardHeading>Golden Package</CardHeading>
            <CardPricing>39.99$/mo</CardPricing>
            <CardFeatures>
              <ListItem>
                Free Game Demos <FaXmark />
              </ListItem>
              <ListItem>
                Monthly Gift cards <FaXmark />
              </ListItem>
              <ListItem>
                Refund & Return <FaCheck />
              </ListItem>
              <ListItem>
                Regular Discounts <FaCheck />
              </ListItem>
              <ListItem>
                Bundle Deals <FaCheck />
              </ListItem>
            </CardFeatures>
            <Button type="rounded-sm">Buy now</Button>
          </CardItem>

          <CardItem>
            <CardBadge></CardBadge>
            <CardHeading>Platinum Package</CardHeading>
            <CardPricing>49.99$/mo</CardPricing>
            <CardFeatures>
              <ListItem>
                Free Game Demos <FaCheck />
              </ListItem>
              <ListItem>
                Monthly Gift cards <FaCheck />
              </ListItem>
              <ListItem>
                Refund & Return <FaCheck />
              </ListItem>
              <ListItem>
                Regular Discounts <FaCheck />
              </ListItem>
              <ListItem>
                Bundle Deals <FaCheck />
              </ListItem>
            </CardFeatures>
            <Button type="rounded-sm">Buy now</Button>
          </CardItem>
        </Row>
      </Container>
    </StyledPricing>
  );
}

export default Pricing;
