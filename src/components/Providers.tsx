'use client';

import { NextUIProvider } from '@nextui-org/react';
import AuthProvider from './AuthProvider';

interface ProvidersProps {
  children: React.ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
  return (
    <NextUIProvider>
      <AuthProvider>
        {children}
      </AuthProvider>
    </NextUIProvider>
  );
};

export default Providers;
