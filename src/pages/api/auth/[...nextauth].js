import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      // Add access token to the token object
      if (account) {
        token.accessToken = account.access_token; // ✅ No optional chaining
      }
      return token;
    },
    async session({ session, token }) {
      // Attach the access token to the session
      if (session.user) {
        session.user.accessToken = token.accessToken; // ✅ No optional chaining
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);
