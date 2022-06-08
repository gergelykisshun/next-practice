import React, { useEffect, useState } from 'react';
import { NextPage, GetStaticProps } from 'next';
import axios from 'axios';

type Props = {
  posts: {id: number, title: string}[];
}

const popular: NextPage<Props> = ({posts}) => {

  const [users, setUsers] = useState<{users: string[]} | null>(null);

  useEffect(() => {
    
    axios.get('../api/users')
      .then(({ data }) => {
        console.log(data);
        setUsers(data);
      })
      .catch(err => console.log(err));
  }, [])
  
  return (
    <>
      {users && <div>{users.users}</div>}
      {posts.map(post => <p key={post.id}>{post.title}</p>)}
    </>
  )
}

export const getStaticProps: GetStaticProps = () => {
  axios.get('../api/users')
  .then(({ data }) => {
    console.log(data);
  })
  .catch(err => console.log(err));



  return {
    props: {
      posts: [
        {
          id: 1,
          title: 'HelloWorld'
        }
      ]
    }
  }
}


export default popular;





