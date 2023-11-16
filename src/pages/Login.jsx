import { Link } from "react-router-dom";
import styled from "styled-components";

import LoginForm from "../features/authentication/LoginForm";

import Logo from "../ui/Logo";

const StyledLogin = styled.section`
  padding-top: 10rem;
  height: 100vh;
  background-color: #f5fbff;
`;

const Container = styled.div`
  max-width: 114rem;
  padding: 0 1.5rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Divider = styled.div`
  display: inline-block;
  text-align: center;
  position: relative;
  font-size: 1.2rem;
  font-weight: 500;
  color: #767676;
  background-color: #f5fbff;
  padding: 0 0.5rem;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: -125px;
    transform: translateY(-50%);
    width: 38rem;
    height: 0.5px;
    background-color: #adb5bd;
    z-index: -1;
  }
`;

const StyledButton = styled(Link)`
  background: transparent;
  width: 38rem;
  line-height: 4rem;
  margin-top: 1rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  border: 2px solid transparent;
  background-image: linear-gradient(white, white),
    var(--background-linear-gradient-primary);
  background-origin: border-box;
  background-clip: content-box, border-box;
  background-size: 200% auto;
  border-radius: 5px;
  transition: all 0.3s;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    box-shadow: var(--box-shadow);
  }
`;

function Login() {
  return (
    <StyledLogin>
      <Container>
        <Logo type="dark" />
        <LoginForm margin="2.4rem 0 1rem 0" />
        <Divider>New to Comodo games?</Divider>
        <StyledButton to="/register">Create new account</StyledButton>
      </Container>
    </StyledLogin>
  );
}

export default Login;
