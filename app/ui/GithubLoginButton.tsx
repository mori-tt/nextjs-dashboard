'use client';

import { Button } from './button';
import { signIn } from 'next-auth/react';

export default function GithubLoginButton() {
  return (
    <Button onClick={() => signIn('github')}>Sign in with GitHub</Button>
  );
}