import { useForm } from "react-hook-form";
import styled from "styled-components";

import SpinnerMini from "../../ui/SpinnerMini";
import FormRow from "../../ui/FormRow";

import { useSignup } from "./useSignup";

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

function SignupForm({ margin }) {
  const { signup, isLoading } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ username, email, password }) {
    signup(
      { username, email, password },
      {
        onSettled: () => reset(),
      }
    );
  }

  return (
    <Form margin={margin} onSubmit={handleSubmit(onSubmit)}>
      <Heading>Create Account</Heading>

      <FormRow label="Your name" error={errors?.username?.message}>
        <Input
          type="text"
          id="username"
          {...register("username", { required: "This field is required" })}
          placeholder="First and last name"
          autoFocus
          disabled={isLoading}
        />
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please enter a valid email address",
            },
          })}
          disabled={isLoading}
        />
      </FormRow>

      <FormRow label="Password" error={errors?.password?.message}>
        <Input
          type="password"
          id="password"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
          placeholder="At least 8 characters"
          disabled={isLoading}
        />
      </FormRow>

      <FormRow label="Confirm Password" error={errors?.cpassword?.message}>
        <Input
          type="cpassword"
          id="cpassword"
          {...register("cpassword", {
            required: "This field is required",
            validate: (value) =>
              value === getValues().password || "Passwords need to match",
          })}
          disabled={isLoading}
        />
      </FormRow>

      <FormRow>
        <StyledButton disabled={isLoading}>
          {!isLoading ? "Create your Account" : <SpinnerMini />}
        </StyledButton>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
