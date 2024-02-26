import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

const authOptions = {
  secret: process.env.AUTH_SECRET,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID ?? '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET ?? '',
    }),
  ],
};

const authHandler = (req, res) => NextAuth(req, res, authOptions);

export default authHandler;
