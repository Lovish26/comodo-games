import styled from "styled-components";

import Heading from "./Heading";
import Button from "./Button";

const StyledAbout = styled.section`
  padding: 12rem 0;
`;

const Container = styled.div`
  max-width: 114rem;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (max-width: 1200px) {
    max-width: 96rem;
  }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  align-items: center;

  &::before {
    position: absolute;
    content: "";
    width: 90%;
    height: 100%;
    top: 0px;
    left: 0px;
    background: var(--background-linear-gradient-secondary);
    z-index: -2;
  }

  @media (max-width: 1200px) {
    /* max-width: 72rem; */
    display: flex;
    flex-direction: column;

    &::before {
      width: 100%;
    }
  }
`;
const Column = styled.div`
  padding: 0 1.5rem;
`;

const SectionContent = styled.div`
  padding: 7rem 0 7rem 7rem;

  @media (max-width: 1200px) {
    padding: 7rem;
  }
  @media (max-width: 720px) {
    padding: 7rem 3.5rem;
  }
`;

const Paragraph = styled.p`
  color: white;
  padding: 0 40px 40px 0;
`;

const SectionImageBox = styled.div`
  position: relative;

  @media (max-width: 1200px) {
    &::before {
      display: none;
    }
    &::after {
      display: none;
    }

    & > img {
      display: none;
    }
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 40rem;
    top: -2.5rem;
    left: 2.5rem;
    border: 2px dashed var(--color-brand-primary);
    z-index: -1;
  }
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 40.6rem;
    top: -2.8rem;
    left: 2.8rem;
    background-color: rgba(0, 0, 0, 0.05);
    z-index: -1;
  }
`;

function About() {
  return (
    <StyledAbout>
      <Container>
        <Row>
          <Column>
            <SectionContent>
              <Heading as="h5">About us</Heading>
              <Heading as="h3">
                Welcome to Comodo Games where passion meets play!
              </Heading>
              <Paragraph>
                Founded by avid gamers, our platform is more than just a
                marketplace; it&apos;s a community driven by a shared love for
                immersive experiences and pixelated wonders.
              </Paragraph>
              <Button type="rounded-sm">Learn more</Button>
            </SectionContent>
          </Column>
          <Column>
            <SectionImageBox>
              <img
                src="https://images.unsplash.com/photo-1610041321327-b794c052db27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="About us games img"
              />
            </SectionImageBox>
          </Column>
        </Row>
      </Container>
    </StyledAbout>
  );
}

export default About;
