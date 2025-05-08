'use client';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/lib/firebase';
import Header from '@/components/ui/Header';
import LoginForm from '@/components/auth/LoginForm';
import RegisterForm from '@/components/auth/RegisterForm';
import LoginStatus from '@/components/auth/LoginStatus';

export default function HomePage() {
  const [user] = useAuthState(auth);
  return (
    <main>
      <Header />
      <LoginStatus />
      {!user && (
        <>
          <LoginForm />
          <RegisterForm />
        </>
      )}
    </main>
  );
}
