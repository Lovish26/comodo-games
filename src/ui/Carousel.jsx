import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const StyledCarousel = styled(Carousel)`
  /* Your global styles for the carousel go here */

  @media (max-width: 1200px) {
    /* Styles for tablet */
    height: 250px;
  }

  @media (max-width: 720px) {
    /* Styles for mobile */
    height: 200px;
  }

  & ul {
    height: 100%;
  }
`;

const StyledLink = styled(Link)`
  /* height: 100% !important; */

  & > img {
    height: 100%;
  }
`;

function CarouselSlider() {
  return (
    <>
      <StyledCarousel
        swipeable={true}
        draggable={true}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass="carousel-item-padding-40-px"
      >
        <StyledLink to="/shop/rg-rdr-ps4">
          <img src="/exclusive-deals/rdr-banner.webp" alt="rdr img" />
        </StyledLink>
        <StyledLink to="/shop/ea-sports-fc-24-ps5">
          <img src="/exclusive-deals/fc24-banner.webp" alt="rdr img" />
        </StyledLink>
        <StyledLink to="/shop/big-ant-studios-cricket-24-ps5">
          <img src="/exclusive-deals/c24-banner.webp" alt="rdr img" />
        </StyledLink>
        <StyledLink to="/shop/mortal-kombat-1-xbox">
          <img src="/exclusive-deals/mk1-banner.webp" alt="rdr img" />
        </StyledLink>
      </StyledCarousel>
    </>
  );
}

export default CarouselSlider;
