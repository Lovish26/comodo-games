import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { HiOutlineStar } from "react-icons/hi";
import styled from "styled-components";

const StarStyling = {
  width: "1.4rem",
  color: "#ffba00",
};

const StyledStarRating = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: 1px solid #bbbfbf;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const Rating = styled.p`
  font-size: 1.4rem;
  margin-right: 0.8rem;
  color: #222;
  font-weight: 500;
`;

const Review = styled.p`
  font-size: 1.4rem;
  margin-left: 0.8rem;
  color: #666;
`;

function StarRating({ rating, reviews }) {
  const starRating = Array.from({ length: 5 }, (elem, index) => {
    const number = index + 0.5;

    return (
      <span style={{ display: "flex", alignItems: "center" }} key={index}>
        {rating >= index + 1 ? (
          <FaStar style={StarStyling} />
        ) : rating >= number ? (
          <FaStarHalfAlt style={StarStyling} />
        ) : (
          <HiOutlineStar style={{ height: "1.8rem", ...StarStyling }} />
        )}
      </span>
    );
  });

  return (
    <StyledStarRating>
      <Rating>{rating}</Rating>
      <Row>{starRating}</Row>
      <Review>({reviews} reviews)</Review>
    </StyledStarRating>
  );
}

export default StarRating;
