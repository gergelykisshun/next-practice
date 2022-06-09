import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

type Props = {}

const Login: NextPage<Props> = (props) => {
  const router = useRouter();

  return (
    <div onClick={() => router.push('/logout')}>Login</div>
  )
}

export default Login;