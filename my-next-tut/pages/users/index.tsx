import React, { ReactElement, ReactNode } from 'react';
import { GetServerSidePropsContext, NextPage } from 'next';
import style from './index.module.scss';

type UserType = {
    id: number;
    username: string;
}

type Props = {
    user: UserType
}

type UserPageWithLayout =  NextPage<Props> & {
    getLayout: (page: ReactElement) => ReactNode;
}

const UserPage: UserPageWithLayout = ({user}) => {
  return (
      <>
        <div>UserPage</div>
        <p className={style.username}>{user.username} - {user.id}</p>
        <div className={style['user-details']}>
            <ul>
                <li>Profile</li>
                <li>Account</li>
            </ul>
        </div>
      </>
  )
}

UserPage.getLayout = (page: ReactElement) => {
    return (
        <>
            <h1>Users layout</h1>
            {page}
            <footer>Users page</footer>
        </>
    )
};

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    console.log(context);

    return {
        props: {
            user: {
                id: 5,
                username: 'Ellis'
            }
        }
    };  
}

export default UserPage;