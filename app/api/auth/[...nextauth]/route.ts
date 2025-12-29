import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";
import { User as NextAuthUser } from "next-auth";
import axios from "axios";

interface CustomUser extends NextAuthUser {
  id: string;
  username: string;
  email: string;
  jwt: string;
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
          const res = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/api/auth/local`,
            {
              identifier: credentials.email,
              password: credentials.password,
            }
          );

          if (!res.data?.jwt || !res.data?.user) {
            console.log("INVALID STRAPI RESPONSE");
            return null;
          }

          return {
            id: res.data.user.id.toString(),
            username: res.data.user.username,
            email: res.data.user.email,
            jwt: res.data.jwt,
          };
        } catch (err) {
          console.error("AUTHORIZE ERROR", err);
          throw new Error("Invalid email or password");
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
