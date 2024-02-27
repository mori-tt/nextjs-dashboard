import NextAuth from 'next-auth';

export const authOptions = {
  // providers配列を空にします
  providers: [],
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
