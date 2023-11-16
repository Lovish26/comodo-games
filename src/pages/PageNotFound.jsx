import styled from "styled-components";

import { useMoveBack } from "../hooks/useMoveBack";

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

const NotFoundHeading = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const NotFoundText = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const NotFoundImage = styled.img`
  width: 300px;
  height: 300px;
  margin-bottom: 2rem;
`;

const StyledButton = styled.button`
  background: transparent;
  border: none;
  font-size: 2.4rem;
  font-weight: 500;
  color: blue;

  transition: all 0.3s;

  &:hover {
    color: #f59f00;
  }
`;

function PageNotFound() {
  const moveBack = useMoveBack();
  return (
    <NotFoundContainer>
      <NotFoundHeading>404 - Page Not Found</NotFoundHeading>
      <NotFoundText>
        Oops! Looks like the page you&apos;re looking for does not exist.
      </NotFoundText>
      <NotFoundImage
        src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=740&t=st=1698920474~exp=1698921074~hmac=24176ac6baec55833aa3b521796181723d5f87e6ce56eb9344fcdb9d378a6773"
        alt="404 Image"
      />
      <StyledButton onClick={moveBack}>&larr; Go back</StyledButton>
    </NotFoundContainer>
  );
}

export default PageNotFound;
