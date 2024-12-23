'use server';

import { z } from 'zod';
import { AuthError } from "next-auth";
import { signIn } from '@/utils/auth';
import { redirect } from 'next/navigation';

const signInSchema = z.object({
  password: z.string().min(3).max(255),
});

interface SignInFormState {
  success?: boolean;
  errors: {
    password?: string[];
    _form?: string[];
  };
};

const extractError = (error?: unknown): string => {
  if (error instanceof AuthError) {
    if (error.type === 'CredentialsSignin') {
      return 'Invalid Password';
    }
  }
  
  return 'Something Went Wrong';
};

export async function signInAction(
  formState: SignInFormState,
  formData: FormData
): Promise<SignInFormState> {
  const result = signInSchema.safeParse({
    password: formData.get('password'),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  try {
    await signIn('credentials', {
      redirect: false,
      password: result.data.password,
    });
  } catch (err: unknown) {
    return {
      errors: {
        _form: [extractError(err)],
      },
    };
  }

  redirect('/');

  return {
    success: true,
    errors: {},
  };
};
