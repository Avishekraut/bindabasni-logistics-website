import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";
import { User as NextAuthUser } from "next-auth";
import api from "@/lib/axiosInstance";
import { AxiosError } from "axios";
import { StrapiErrorResponse } from "@/types/shared";

interface CustomUser extends NextAuthUser {
  id: string;
  username: string;
  email: string;
  jwt: string;
}

interface AuthResponse {
  jwt: string;
  user: {
    id: number;
    documentId: string;
    username: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    phone: string | null;
  };
}

interface CustomJWT extends JWT {
  id?: string;
  username?: string;
  email?: string;
  jwt?: string;
}

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        if (!credentials) {
          return null;
        }
        try {
          const res = await api.post<AuthResponse>("/api/auth/local", {
            identifier: credentials.email,
            password: credentials.password,
          });

          const data = res.data;

          if (data.jwt && data.user) {
            return {
              id: data.user.id.toString(),
              username: data.user.username,
              email: data.user.email,
              jwt: data.jwt,
            } as CustomUser;
          } else {
            throw new Error("Login failed");
          }
        } catch (error) {
          if (error instanceof AxiosError) {
            const errorData = error.response?.data as
              | StrapiErrorResponse
              | undefined;

            if (errorData?.error?.message) {
              throw new Error(errorData.error.message);
            } else if (errorData?.message) {
              throw new Error(errorData.message);
            } else if (error.message) {
              throw new Error(error.message);
            }
          } else if (error instanceof Error) {
            throw new Error(error.message);
          }

          throw new Error("Login failed. Please try again.");
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user && "id" in user && "jwt" in user) {
        token.id = user.id;
        token.username = (user as CustomUser).username;
        token.email = user.email;
        token.jwt = (user as CustomUser).jwt;
      }
      return token as CustomJWT;
    },
    session: async ({ session, token }) => {
      session.user = {
        id: token.id as string,
        username: token.username as string,
        email: token.email as string,
      };
      session.jwt = token.jwt as string;
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  debug: true,
});

export { handler as GET, handler as POST };
