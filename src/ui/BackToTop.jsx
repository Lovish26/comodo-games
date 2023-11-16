import { useState, useEffect } from "react";
import styled from "styled-components";
import { FaChevronUp } from "react-icons/fa";

const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 25px;
  right: 25px;
  background: var(--background-linear-gradient-primary);
  background-size: 200% auto;
  color: #fff;
  border: none;
  padding: 10px 15px;
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  box-shadow: var(--box-shadow);
  cursor: pointer;
  display: ${({ visible }) => (visible ? "block" : "none")};
  transition: all 0.3s ease;

  & > svg {
    font-size: 2rem;
    transition: all 0.3s ease;
  }

  &:hover {
    & > svg {
      transform: translateY(-8px);
    }
  }
`;

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollThreshold = 0; // Adjust this value to your desired scroll threshold

      setIsVisible(scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ScrollToTopButton
      visible={isVisible}
      onClick={scrollToTop}
      aria-label="back-to-top"
    >
      <FaChevronUp />
    </ScrollToTopButton>
  );
}

export default ScrollToTop;
