'use client';

import { useFormStatus } from 'react-dom';
import { Button } from '@nextui-org/react';

interface SubmitButtonProps {
  children: React.ReactNode;
}
 
const SubmitButton = ({ children }: SubmitButtonProps) => {
  const status = useFormStatus();
  return (
    <Button
      isDisabled={status.pending}
      className="bg-black text-white w-full"
      type="submit"
      size="lg"
    >
      {status.pending ? 'Loading...' : children}
    </Button>
  );
};

export default SubmitButton;
