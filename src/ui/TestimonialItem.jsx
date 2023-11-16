import styled from "styled-components";

import Heading from "./Heading";

const TestimonialImg = styled.div`
  background: url("https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")
    center center / cover no-repeat;
  width: 15rem;
  height: 15rem;
  border-radius: 100%;
`;

const Review = styled.em`
  color: white;
  padding: 0 15rem;

  @media (max-width: 1200px) {
    padding: 0 9.6rem;
  }
  @media (max-width: 720px) {
    padding: 0 4.8rem;
  }
`;

function TestimonialItem() {
  return (
    <>
      <TestimonialImg />
      <Heading as="h2">Sarah K. - Hardcore Gamer</Heading>
      <Review>
        I&apos;ve been a gaming enthusiast for years, and Comodo Games has
        become my go-to destination. The selection is unparalleled, covering
        everything from cutting-edge releases to rare gems. The purchasing
        process is smooth, and the download experience is lightning-fast.
        I&apos;ve found my gaming paradise, and I&apos;m hooked!
      </Review>
    </>
  );
}

export default TestimonialItem;
