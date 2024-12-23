'use client';

import { Input } from "@nextui-org/react";
import { useFormState } from "react-dom";
import * as actions from '@/actions';
import SubmitButton from "@/components/SubmitButton";

const PasswordForm = () => {
  const [formState, action] = useFormState(actions.signInAction, {
    errors: {},
  });

  return (
    <form action={action}>
      <div className="flex flex-col justify-center items-center gap-6">
        <h1 className="text-5xl font-medium">
          Password Protected
        </h1>

        <p className="text-base font-normal text-gray-400">
          You need a password to view this site
        </p>

        <Input
          errorMessage={formState.errors._form?.join(', ') || formState.errors.password?.join(', ')}
          placeholder="Enter Password"
          isInvalid={!!formState.errors._form || !!formState.errors.password}
          variant="bordered"
          type="password"
          name="password"
          size="sm"
          id="password"
        />

        <SubmitButton>
          Continue
        </SubmitButton>
      </div>
    </form>
    
  );
};

export default PasswordForm;
