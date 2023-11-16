import styled from "styled-components";
import Logo from "./Logo";
import {
  FaSteam,
  FaDiscord,
  FaYoutube,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const StyledFooter = styled.footer`
  background: var(--background-linear-gradient-secondary);
`;

const Container = styled.div`
  padding: 12rem 0 0 0;
  max-width: 114rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SocialHandlesBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 1.2rem;
  padding: 12.6rem 0 4.8rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

const Link = styled.a`
  font-size: 2.8rem;
  color: rgba(255, 255, 255, 0.5);
  transition: all 0.3s;

  &:hover {
    color: white;
  }
`;

const CopyrightBox = styled.div`
  padding: 3rem 0;
  color: white;
`;

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Logo />
        <SocialHandlesBox>
          <Link href="https://store.steampowered.com/">
            <FaSteam />
          </Link>
          <Link href="https://discord.com/">
            <FaDiscord />
          </Link>
          <Link href="https://www.youtube.com/">
            <FaYoutube />
          </Link>
          <Link href="https://twitter.com/">
            <FaTwitter />
          </Link>
          <Link href="https://www.instagram.com/">
            <FaInstagram />
          </Link>
        </SocialHandlesBox>
        <CopyrightBox>Copyright ©2023 All rights reserved</CopyrightBox>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
