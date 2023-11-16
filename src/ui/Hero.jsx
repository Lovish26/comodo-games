import styled from "styled-components";
import Heading from "./Heading";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const StyledHero = styled.section`
  background: url("/home-banner.webp") no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
`;
const Container = styled.div`
  max-width: 114rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  padding-top: 24rem;

  @media (max-width: 1200px) {
    max-width: 72rem;
  }

  @media (max-width: 720px) {
    max-width: 50rem;
  }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 9.6rem;

  /* & > img {
    display: inline;
  } */

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;

    & > img {
      display: none;
    }
  }
`;

const Paragraph = styled.p`
  color: white;
  margin-bottom: 2rem;
`;

function Hero() {
  const navigate = useNavigate();

  return (
    <StyledHero>
      <Container>
        <Row>
          <img src="hero-banner.webp" alt="sot-ps5-disk" />
          <div>
            <Heading as="h4">
              Game On: Elevate Your Play with Our Premier Selection!
            </Heading>
            <Paragraph>
              Immerse yourself in a world of limitless possibilities at our
              game-selling haven! Discover a curated selection of the latest
              releases, timeless classics, and hidden gems that cater to every
              gaming palate. From heart-pounding action to mind-bending puzzles,
              our diverse catalog ensures there&apos;s something for every
              player.
            </Paragraph>

            <Button type="rounded-sm" onClick={() => navigate("/shop")}>
              Shop now
            </Button>
          </div>
        </Row>
      </Container>
    </StyledHero>
  );
}

export default Hero;
