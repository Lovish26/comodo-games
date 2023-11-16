import { useState } from "react";
import styled from "styled-components";

import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";

import { useUser } from "./useUser";
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

function UpdateUserDataForm() {
  // We don't need the loading state, and can immediately use the user data, because we know that it has already been loaded at this point
  const {
    user: {
      email,
      user_metadata: { username: currentFullName },
    },
  } = useUser();

  const { updateUser, isUpdating } = useUpdateUser();

  const [fullName, setFullName] = useState(currentFullName);

  function handleSubmit(e) {
    e.preventDefault();

    if (!fullName) return;

    updateUser({ fullName });
  }

  function handleCancel() {
    setFullName(currentFullName);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Email address">
        <Input value={email} disabled />
      </FormRow>
      <FormRow label="Full name">
        <Input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          id="fullName"
          disabled={isUpdating}
        />
      </FormRow>

      <ButtonContainer>
        <CancelButton type="reset" disabled={isUpdating} onClick={handleCancel}>
          Cancel
        </CancelButton>

        <UpdateButton disabled={isUpdating}>Update account</UpdateButton>
      </ButtonContainer>
    </Form>
  );
}

export default UpdateUserDataForm;
