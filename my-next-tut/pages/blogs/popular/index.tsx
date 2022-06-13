import React, { useEffect, useState } from 'react';
import { NextPage, GetStaticProps } from 'next';
import axios from 'axios';
import styles from './index.module.scss';

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
      {users && <div className={styles.user}>{users.users}</div>}
      {posts.map(post => <p key={post.id}>{post.title}</p>)}
      <div className={styles.card}>
        <div className={styles['card-content']}>
          <h2 className={styles['card-title']}>Something awsome</h2>
          <p className={styles['card-body']}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, delectus cum! Exercitationem laboriosam </p>
          <button>Learn more</button>
        </div>
      </div>
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





