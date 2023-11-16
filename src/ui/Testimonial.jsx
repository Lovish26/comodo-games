import styled from "styled-components";

import TestimonialItem from "./TestimonialItem";

const StyledTestimonial = styled.section`
  padding: 12rem 0;
  position: relative;
  background: url("https://images.unsplash.com/photo-1603481546579-65d935ba9cdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")
    center center / cover no-repeat;
  background-attachment: fixed;
`;

const Container = styled.div`
  max-width: 114rem;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Testimonial() {
  return (
    <StyledTestimonial>
      <Container>
        <Row>
          <TestimonialItem />
        </Row>
      </Container>
    </StyledTestimonial>
  );
}

export default Testimonial;
