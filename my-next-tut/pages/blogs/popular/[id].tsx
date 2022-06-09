import React from 'react';
import { GetStaticPathsContext, GetStaticPropsContext, NextPage } from 'next';
import axios from 'axios';

type BlogPost = {
  id: number;
  title: string;
}

type Props = {
  id: string;
}

const IndividualBlogPage: NextPage<Props> = ({id}) => {
  return (
    <div>IndividualBlogPage {id}</div>
  )
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  // console.log(context.params);
  const id  = context.params!.id;
  console.log(id);
  // fetch here again with the id, get single resource
  return {
    props: {
      id
    }
  }
};

export const getStaticPaths = async () => {

  // const { data: posts } = await axios.get<BlogPost[]>('../api/dummy');
  const posts: BlogPost[] = [
    {
      id: 1,
      title: 'Post 1'
    },
    {
      id: 2,
      title: 'Post 2'
    },
    {
      id: 3,
      title: 'Post 3'
    }
  ]

  const paths = posts.map(post => ({params: {id: post.id.toString()}}))
  console.log(paths);

  return {
    paths: paths,
    fallback: false
  }
};

export default IndividualBlogPage;