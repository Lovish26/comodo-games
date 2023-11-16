import { useForm } from "react-hook-form";

import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import styled from "styled-components";

import { useUpdateUser } from "./useUpdateUser";

const Input = styled.input`
  border: 1px solid rgb(206, 212, 218);
  background-color: #fff;
  border-radius: 3px;
  padding: 0.8rem 1.2rem;

  &:disabled {
    background-color: #e5e7eb;
    color: #6b7280;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1.2rem;
`;

const CancelButton = styled.button`
  color: #000;
  background: transparent;
  text-transform: uppercase;

  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 1px;
  padding: 0 2.4rem;
  line-height: 3.2rem;

  transition: all 0.4s;
  border: 2px solid var(--color-brand-tertiary);
  border-radius: 5px;

  &:hover {
    background-color: #edf2ff;
  }
`;

const UpdateButton = styled.button`
  color: #fff;
  background-color: var(--color-brand-tertiary);
  text-transform: uppercase;

  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 1px;
  padding: 0 2.4rem;
  line-height: 3.2rem;
  margin-right: 1.5rem;

  transition: all 0.4s;
  border: 2px solid var(--color-brand-tertiary);
  border-radius: 5px;

  &:hover {
    opacity: 0.8;
  }
`;

function UpdatePasswordForm() {
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;

  const { updateUser, isUpdating } = useUpdateUser();

  function onSubmit({ password }) {
    updateUser({ password }, { onSuccess: () => reset() });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow
        label="New Password (min 8 characters)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          disabled={isUpdating}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Confirm password"
        error={errors?.passwordConfirm?.message}
      >
        <Input
          type="password"
          autoComplete="new-password"
          id="passwordConfirm"
          disabled={isUpdating}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              getValues().password === value || "Passwords need to match",
          })}
        />
      </FormRow>
      <ButtonContainer>
        <CancelButton
          onClick={reset}
          type="reset"
          variation="secondary"
          disabled={isUpdating}
        >
          Cancel
        </CancelButton>
        <UpdateButton disabled={isUpdating}>Update password</UpdateButton>
      </ButtonContainer>
    </Form>
  );
}

export default UpdatePasswordForm;
