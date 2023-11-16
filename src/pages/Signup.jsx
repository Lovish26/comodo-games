import styled from "styled-components";
import Logo from "../ui/Logo";
import SignupForm from "../features/authentication/SignupForm";

const StyledSignup = styled.section`
  padding-top: 10rem;
  height: auto;
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

function Signup() {
  return (
    <StyledSignup>
      <Container>
        <Logo type="dark" />
        <SignupForm margin="2.4rem 0" />
      </Container>
    </StyledSignup>
  );
}

export default Signup;
