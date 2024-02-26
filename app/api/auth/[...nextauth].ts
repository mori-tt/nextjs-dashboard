import NextAuth from 'next-auth';
import { authConfig } from '../../../auth.config'; // auth.config.tsのパスを適切に設定

export default NextAuth(authConfig);
