import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

type Props = {}

const Logout: NextPage<Props> = (props) => {

    const router = useRouter();
    console.log(router.query);
    

  return (
    <div onClick={() => router.push('/login')}>Logout</div>
  )
}

export default Logout;