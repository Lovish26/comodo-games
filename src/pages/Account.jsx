import styled from "styled-components";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";

const StyledAccount = styled.section`
  min-height: 100vh;
  background-color: rgb(245, 251, 255);
`;

const Container = styled.div`
  max-width: 114rem;
  margin: 0 auto;
  padding: 15rem 1.5rem 10rem;
`;

const H1 = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 2rem;
`;
const H3 = styled.h3`
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.4;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

function Account() {
  return (
    <StyledAccount>
      <Container>
        <H1>Update your account</H1>

        <Row>
          <H3>Update user data</H3>
          <UpdateUserDataForm />
        </Row>
        <Row>
          <H3>Update password</H3>
          <UpdatePasswordForm />
        </Row>
      </Container>
    </StyledAccount>
  );
}

export default Account;
