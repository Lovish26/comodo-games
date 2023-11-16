import { useState } from "react";
import styled from "styled-components";

import { useLogin } from "./useLogin";

import FormRowVertical from "../../ui/FormRowVertical";
import SpinnerMini from "../../ui/SpinnerMini";

const Form = styled.form`
  padding: 2.4rem 4rem;
  margin: ${(props) => (props.margin ? props.margin : 0)};

  background-color: #fff;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  font-size: 1.4rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`;

const Heading = styled.div`
  font-size: 2.4rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  border: 1px solid #ced4da;
  background-color: #f5fbff;
  border-radius: 5px;
  padding: 0.8rem 1.2rem;
  min-width: 30rem;
`;

const StyledButton = styled.button`
  background: var(--background-linear-gradient-primary);
  background-size: 200% auto;
  color: #222;
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: 1px;
  padding: 0 3.5rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.4s;
  box-shadow: var(--box-shadow);
  border: none;

  &:hover {
    background-position: right center;
    color: #22195e;
  }
`;

function LoginForm({ margin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;

    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <Form margin={margin} onSubmit={handleSubmit}>
      <Heading>Sign in</Heading>

      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoFocus
          disabled={isLoading}
        />
      </FormRowVertical>

      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>

      <FormRowVertical>
        <StyledButton disabled={isLoading}>
          {!isLoading ? "Log in" : <SpinnerMini />}
        </StyledButton>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
