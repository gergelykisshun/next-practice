import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';

type Props = {}

const Login: NextPage<Props> = (props) => {
  const router = useRouter();
  console.log(router.pathname);

  return (
    <>
      <div onClick={() => router.push('/logout')}>Login</div>
      <Link href={{pathname: '/dashboard', query: { id: 123 }}}>
        to Dashboard
      </Link>
    </>
  )
}

export default Login;