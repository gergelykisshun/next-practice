// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  posts: {id:number, title:string}[];
}

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json({ posts: [
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
  ] });
}

export default handler;


