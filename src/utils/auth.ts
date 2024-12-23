import NextAuth, { NextAuthConfig } from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import { v4 as uuidv4 } from 'uuid';

export const authConfig: NextAuthConfig = {
  session: {
    strategy: 'jwt',
    maxAge: 1 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        if (credentials.password === process.env.ACCESS_PASSWORD) {
          return { id: uuidv4() };
        }

        return null;
      },
    })
  ],
  callbacks: {
    session: ({ session, token }) => {
      return ({
        ...session,
        user: {
          ...session.user,
          id: token.sub,
        },
      });
    },
  },
};

export const { handlers, signIn, auth } = NextAuth(authConfig);
